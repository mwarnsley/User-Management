const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLList} = graphql;
const axios = require('axios');

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    users: {
      type: new GraphQLList(require('./user_type')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`).then(res => res.data);
      },
    },
  }),
});

module.exports = CompanyType;
