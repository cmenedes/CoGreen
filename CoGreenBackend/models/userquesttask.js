/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userquesttask', {
    UserQuestTaskId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserQuestId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    TaskId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CompletionDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'userquesttask'
  });
};
