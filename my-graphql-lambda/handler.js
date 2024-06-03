const { graphqlLambda } = require('graphql-server-lambda');
const { makeExecutableSchema } = require('graphql-tools');
const { schema, resolvers } = require('./schema');
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
module.exports.queryHandler = graphqlLambda({ schema: executableSchema });
module.exports.mutationHandler = graphqlLambda({ schema: executableSchema });
module.exports.subscriptionHandler = graphqlLambda({ schema: executableSchema });
