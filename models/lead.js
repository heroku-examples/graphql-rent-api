'use strict'

const uuid = require('uuid/v4')

module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('lead', {
    id: {
      type: DataTypes.UUID,
      autoIncrement: false,
      field: 'external_id__c',
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'firstname'
    },
    lastName: { 
      type: DataTypes.STRING,
      field: 'lastname'
    },
    email: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'lead',
    hooks: {
      beforeCreate (lead) {
        lead.id = uuid()
      }
    }
  })
  Lead.associate = function (models) {
    // associations can be defined here
  }
  return Lead.schema('gqlthlive')
}
