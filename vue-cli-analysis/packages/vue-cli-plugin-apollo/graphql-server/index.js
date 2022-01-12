const http = require('http')
const chalk = require('chalk')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { PubSub } = require('graphql-subscriptions')
const merge = require('deepmerge')

const { defaultValue, autoCall } = require('../utils')

// eslint-disable-next-line no-global-assign
require = require('esm')(module)

// 创建基于 express 的 GraphQL server
// apollo-server-express 是由 Apollo 提供在 express 环境下实现 GraphQL 的库
module.exports = (options, cb = null) => {

  // Default options
  options = merge({
    integratedEngine: false,
  }, options)

  // Express app
  const app = express()

  if (options.typescript) require('ts-node/register/transpile-only')

  // Customize those files
  let typeDefs = load(options.paths.typeDefs) // GraphQL schema
  const resolvers = load(options.paths.resolvers) // GraphQL resolvers
  const context = load(options.paths.context) // 向每个 resolvers 可以注入的 context
  const schemaDirectives = load(options.paths.directives) // schema 指令
  let pubsub
  try {
    pubsub = load(options.paths.pubsub)
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && !options.quiet) {
      console.log(chalk.yellow('Using default PubSub implementation for subscriptions.'))
      console.log(chalk.grey(`You should provide a different implementation in production (for example with Redis) by exporting it in 'apollo-server/pubsub.js'.`))
    }
  }
  let dataSources
  try {
    dataSources = load(options.paths.dataSources)
  } catch (e) {}

  // GraphQL API Server

  // Realtime subscriptions
  if (!pubsub) pubsub = new PubSub() // 订阅

  // Customize server
  try {
    const serverModule = load(options.paths.server)
    serverModule(app)
  } catch (e) {
    // No file found
  }


  // Apollo server options

  typeDefs = processSchema(typeDefs)

  let apolloServerOptions = {
    typeDefs,
    resolvers,
    schemaDirectives,
    dataSources,
    tracing: true,
    cacheControl: true,
    engine: !options.integratedEngine,
    // Resolvers context from POST
    context: async ({ req, connection }) => {
      let contextData
      try {
        if (connection) {
          contextData = await autoCall(context, { connection })
        } else {
          contextData = await autoCall(context, { req })
        }
      } catch (e) {
        console.error(e)
        throw e
      }
      contextData = Object.assign({}, contextData, { pubsub })
      return contextData
    },
    // Resolvers context from WebSocket
    subscriptions: {
      path: options.subscriptionsPath,
      onConnect: async (connection, websocket) => {
        let contextData = {}
        try {
          contextData = await autoCall(context, {
            connection,
            websocket,
          })
          contextData = Object.assign({}, contextData, { pubsub })
        } catch (e) {
          console.error(e)
          throw e
        }
        return contextData
      },
    },
  }

  // Automatic mocking
  if (options.enableMocks) {
    // Customize this file
    apolloServerOptions.mocks = load(options.paths.mocks)
    apolloServerOptions.mockEntireSchema = false

    if (!options.quiet) {
      if (process.env.NODE_ENV === 'production') {
        console.warn(`Automatic mocking is enabled, consider disabling it with the 'enableMocks' option.`)
      } else {
        console.log(`✔️  Automatic mocking is enabled`)
      }
    }
  }

  // Apollo Engine
  if (options.enableEngine && options.integratedEngine) {
    if (options.engineKey) {
      apolloServerOptions.engine = {
        apiKey: options.engineKey,
      }
    } else if (!options.quiet) {
      console.log(chalk.yellow('Apollo Engine key not found.') + `To enable Engine, set the ${chalk.cyan('VUE_APP_APOLLO_ENGINE_KEY')} env variable.`)
      console.log('Create a key at https://engine.apollographql.com/')
      console.log('You may see `Error: Must provide document` errors (query persisting tries).')
    }
  } else {
    apolloServerOptions.engine = false
  }

  // Final options
  apolloServerOptions = merge(apolloServerOptions, defaultValue(options.serverOptions, {}))

  // Apollo Server
  const server = new ApolloServer(apolloServerOptions)

  // Express middleware
  // 通过 applyMiddleware() 作为 app 来传递它，来添加 Apollo Server 的中间件
  server.applyMiddleware({
    app,
    path: options.graphqlPath,
    cors: options.cors,
    // gui: {
    //   endpoint: graphqlPath,
    //   subscriptionEndpoint: graphqlSubscriptionsPath,
    // },
  })

  // Start server
  const httpServer = http.createServer(app)
  httpServer.setTimeout(options.timeout)
  server.installSubscriptionHandlers(httpServer)

  httpServer.listen({
    host: options.host || 'localhost',
    port: options.port,
  }, () => {
    if (!options.quiet) {
      console.log(`✔️  GraphQL Server is running on ${chalk.cyan(`http://localhost:${options.port}${options.graphqlPath}`)}`)
      if (process.env.NODE_ENV !== 'production' && !process.env.VUE_CLI_API_MODE) {
        console.log(`✔️  Type ${chalk.cyan('rs')} to restart the server`)
      }
    }

    cb && cb()
  })
}

function load (file) {
  const module = require(file)
  if (module.default) {
    return module.default
  }
  return module
}

function processSchema (typeDefs) {
  if (Array.isArray(typeDefs)) {
    return typeDefs.map(processSchema)
  }

  if (typeof typeDefs === 'string') {
    // Convert schema to AST
    typeDefs = gql(typeDefs)
  }

  // Remove upload scalar (it's already included in Apollo Server)
  removeFromSchema(typeDefs, 'ScalarTypeDefinition', 'Upload')

  return typeDefs
}

function removeFromSchema (document, kind, name) {
  const definitions = document.definitions
  const index = definitions.findIndex(
    def => def.kind === kind && def.name.kind === 'Name' && def.name.value === name
  )
  if (index !== -1) {
    definitions.splice(index, 1)
  }
}
