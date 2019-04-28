/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    InsertedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
