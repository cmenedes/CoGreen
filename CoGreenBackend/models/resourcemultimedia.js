/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resourcemultimedia', {
    ResourceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    MultimediaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'resourcemultimedia'
  });
};
