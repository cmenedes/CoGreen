const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// Option 1: Passing parameters separately
const sequelize = new Sequelize('CoGreen', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.import("./models/user");
const Quest = sequelize.import("./models/Quest");
const UserQuest = sequelize.import("./models/UserQuest");
const GameProfile = sequelize.import("./models/GameProfile");

const app = express();
const port = 3000;

User.hasMany(UserQuest, {foreignKey: 'UserId'});
UserQuest.belongsTo(User, {foreignKey: 'UserId'});
Quest.hasMany(UserQuest, {foreignKey: 'QuestId'});
UserQuest.belongsTo(Quest, {foreignKey: 'QuestId'});
User.hasOne(GameProfile, {foreignKey: 'UserId'});
GameProfile.belongsTo(User, {foreignKey: 'UserId'});

app.get('/', (req, res) => res.json({ message: 'Hello World!'}));
app.get('/GetActiveQuests', (req, res) => {
    let userId = req.query.userId;
    UserQuest.findAll({
        where: {
            Completed: {
                [Op.or]: [null, false]
            },
            UserId: userId
        },
        include: [{
            model: Quest,
            require: true
        }]
    }).then(instance => {

        res.send(`${JSON.stringify(instance)}`);
    })
})

app.get('/GetAvailableQuests', (req, res) => {
    let userId = req.query.userId;
    UserQuest.findAll({
        where: {
            Completed: {
                [Op.or]: [null, false]
            },
            UserId: userId
        },
        Attributes: ['QuestId']
    })
    .then(userQuest => {
        Quest.findAll({
            where: {
                QuestId: {
                    [Op.notIn]: [userQuest.map(x => x.get('QuestId'))]
                }
            }
        })
        .then(instance => {
            res.send(`${JSON.stringify(instance)}`);
        })
    })
})

app.post('/StartQuest', (req, res) => {
    let questId = req.body.QuestId;
    let userId = req.body.UserId;
    
    UserQuest.findOrCreate({
        where: {
            UserId: userId, 
            QuestId: questId, 
            Completed: {
                [Op.or]: [null, false]
            } 
        }, defaults: {Completed: false}})
    .then(([userQuest, created]) => {
        res.send(`${JSON.stringify(userQuest)}`);
    })
})

app.get('/GetProfile', (req, res) => {
    let userId = req.query.userId;
    User.findOne({
        where: {
            UserId: userId
        },
        include: [{
            model: GameProfile,
            require: true
        }]
    }).then(instance => {

        res.send(`${JSON.stringify(instance)}`);
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))