'use strict'

const resolvers = {
  Query: {
    helloWorld () {
      return 'Hello!'
    },
    listLeads (_, __, ctx) {
      return ctx.db.lead.findAll()
    },
    listCustomers (_, { limit }, ctx) {
      return ctx.db.customer.findAll({ limit })
    },
    listProperties (_, { limit }, ctx) {
      return ctx.db.property.findAll({
        limit,
        where: {
          approved: true
        }
      })
    },
    findProperties (_, { city, bathrooms, bedrooms, limit }, ctx) {
      const where = {
        ...(city != null && { city }),
        ...(bathrooms != null && { bathrooms }),
        ...(bedrooms != null && { bedrooms }),
        approved: true
      }
      return ctx.db.property.findAll({
        where,
        limit,
        order: [
          ['id', 'DESC']
        ]
      })
    }
  },
  Mutation: {
    createLead (_, { lead }, ctx) {
      return ctx.db.lead.build(lead).save()
    }
  }
}

module.exports = resolvers
