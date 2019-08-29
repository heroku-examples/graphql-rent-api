'use strict'

const fs = require('fs')
const path = require('path')
const { gql } = require('apollo-server-express')
const resolvers = require('./resolvers')

const schema = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8')

module.exports = {
  typeDefs: gql(schema),
  resolvers
}
