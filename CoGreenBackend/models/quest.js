/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quest', {
    QuestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    QuestTitle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Points: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Experience: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ShortDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    LongDescription: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'quest'
  });
};
