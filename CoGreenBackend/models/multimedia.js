/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('multimedia', {
    MultimediaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Media: {
      type: "BLOB",
      allowNull: false
    },
    MultimediaTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'multimedia'
  });
};
