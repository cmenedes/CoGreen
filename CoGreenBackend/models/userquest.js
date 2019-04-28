/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userquest', {
    UserQuestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    QuestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CompletionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'userquest'
  });
};
