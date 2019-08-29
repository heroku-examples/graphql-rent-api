'use strict'

const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const db = require('./models')
const { typeDefs, resolvers } = require('./graphql')
const port = +process.env.PORT || 8080
const app = express()

const server = http.createServer(app)
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context ({ req }) {
    return {
      db
    }
  },
  playground: true,
  introspection: true
})

app.get('/', (req, res) => {
  res.redirect('/graphql')
})

graphqlServer.applyMiddleware({
  app
})

server.listen(port, () => {
  console.log(`GraphQL Server running on port ${port}`)
})
