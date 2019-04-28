/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gameprofile', {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Level: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    Experience: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Points: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    VerifiedPoints: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'gameprofile'
  });
};
