/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('multimediatype', {
    MultimediaTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Description: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'multimediatype'
  });
};
