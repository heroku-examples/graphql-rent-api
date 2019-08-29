'use strict'
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {})
  Customer.associate = function (models) {
    // associations can be defined here
  }
  return Customer
}
