const graphql = require('graphql');
const UserType = require('../schema/user_type');
const CompanyType = require('../schema/company_type');
const axios = require('axios');
const {GraphQLObjectType, GraphQLString, GraphQLList} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return axios.get(`http://localhost:3000/users`).then(resp => resp.data);
      },
    },
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`).then(resp => resp.data);
      },
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve() {
        return axios.get(`http://localhost:3000/companies`).then(resp => resp.data);
      },
    },
    company: {
      type: CompanyType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`).then(resp => resp.data);
      },
    },
  }),
});

module.exports = RootQuery;
