const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    dob: {type: GraphQLString},
    phone: {type: GraphQLString},
    // company: {
    //   type: {type: GraphQLString},
    //   resolve() {},
    // },
  }),
});

module.exports = UserType;
