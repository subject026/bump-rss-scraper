'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        allowNull: false,
        len: [7, 100]
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        len: [7, 50],
        isEmail: true
      },
      updatedAt: { type: DataTypes.DATE }
    },
    {
      sequelize,
      modelName: 'User'
    }
  )

  return User
}
