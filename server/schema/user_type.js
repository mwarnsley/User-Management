const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql;
const axios = require('axios');
const CompanyType = require('./company_type');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    dob: {type: GraphQLString},
    phone: {type: GraphQLString},
    email: {type: GraphQLString},
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(res => res.data);
      },
    },
  }),
});

module.exports = UserType;
