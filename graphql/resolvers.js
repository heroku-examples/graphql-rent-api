'use strict'

const resolvers = {
  Query: {
    helloWorld () {
      return 'Hello!'
    },
    listCustomers (_, { limit }, ctx) {
      return ctx.db.customer.findAll({ limit })
    },
    listProperties (_, { limit }, ctx) {
      return ctx.db.property.findAll({ limit })
    },
    findProperties (_, { city, bathrooms, bedrooms, limit }, ctx) {
      const where = {
        ...(city != null && { city }),
        ...(bathrooms != null && { bathrooms }),
        ...(bedrooms != null && { bedrooms })
      }
      return ctx.db.property.findAll({
        where,
        limit,
        order: [
          ['id', 'DESC']
        ]
      })
    }
  }
}

module.exports = resolvers
