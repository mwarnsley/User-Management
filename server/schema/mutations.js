const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLNonNull} = graphql;
const axios = require('axios');
const mongoose = require('mongoose');
const UserType = require('./user_type');
const CompanyType = require('./company_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        dob: {type: GraphQLString},
        phone: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        companyId: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parentValue, args) {
        return axios.post(`http://localhost:3000/users`, {...args}).then(res => res.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parentValue, {id}) {
        return axios.delete(`http://localhost:3000/users/${id}`).then(res => res.data);
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        firstName: {type: new GraphQLNonNull(GraphQLString)},
        lastName: {type: new GraphQLNonNull(GraphQLString)},
        dob: {type: GraphQLString},
        phone: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        companyId: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parentValue, args) {
        return axios.patch(`http://localhost:3000/users/${args.id}`, args).then(res => res.data);
      },
    },
    addCompany: {
      type: CompanyType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parentValue, args) {
        return axios.post(`http://localhost:3000/companies`, {...args}).then(res => res.data);
      },
    },
  },
});

module.exports = mutation;
