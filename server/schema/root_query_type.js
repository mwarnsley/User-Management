const graphql = require('graphql');
const UserType = require('../schema/user_type');
const axios = require('axios');
const {GraphQLObjectType, GraphQLString} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`).then(resp => resp.data);
      },
    },
  }),
});

module.exports = RootQuery;
