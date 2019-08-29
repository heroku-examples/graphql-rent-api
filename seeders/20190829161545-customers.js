'use strict'

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const customers = []
    for (let i = 0; i < 3e3; i++) {
      customers.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('customers', customers, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {})
  }
}
