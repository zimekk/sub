// const express = require('express');
const path = require('path');
// const app = express();
const { PORT = 3000 } = process.env;


const { GraphQLServer, PubSub } = require('graphql-yoga')
// const { GraphQLServer } = require('graphql-yoga')

// https://github.com/prisma-labs/graphql-yoga/tree/master/examples/subscriptions#testing
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Counter {
    count: Int!
    countStr: String
  }
  type Subscription {
    counter: Counter!
  }
  `

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
  Counter: {
    countStr: counter => `Current count: ${counter.count}`,
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random().toString(36).substring(2, 15) // random channel name
        let count = 0
        setInterval(() => pubsub.publish(channel, { counter: { count: count++ } }), 2000)
        return pubsub.asyncIterator(channel)
      },
    }
  },
}

// https://blog.logrocket.com/online-radio-server-pure-node-js/
// https://github.com/verekia/js-stack-from-scratch/issues/211#issuecomment-306896107

const compiler = require('webpack')({
  ...require('../webpack.config'),
  mode: 'development'
});
const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })


// https://github.com/webpack/webpack-dev-middleware#server-side-rendering
// app
server.express
.use(
  require('webpack-dev-middleware')(compiler, {
    // mode: 'development'
    // webpack-dev-middleware options
  })
)
//  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(require('./routes'));


  server.start({
    port: PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }, ({ port }) => console.log(`Server is running on localhost:${port}`))

// const server = require('http').Server(app);
// server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

// process.on('SIGINT', () => process.exit());
