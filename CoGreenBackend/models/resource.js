/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource', {
    ResourceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ResourceTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Resource: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'resource'
  });
};
