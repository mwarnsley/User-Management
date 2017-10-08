const graphql = require('graphql');
const {GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: GraphQLString,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {},
    },
  }),
});

module.exports = RootQuery;
