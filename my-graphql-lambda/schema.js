const { buildSchema } = require('graphql');
const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Mutation {
    setMessage(message: String!): String
  }
  type Subscription {
    messageUpdated: String
  }
`);
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
  Mutation: {
    setMessage: ({ message }) => {
      // Handle the mutation logic here
      return message;
    },
  },
  Subscription: {
    messageUpdated: {
      subscribe: () => pubsub.asyncIterator('messageUpdated'),
    },
  },
};
module.exports = { schema, resolvers };
