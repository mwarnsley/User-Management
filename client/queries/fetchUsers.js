import gql from 'graphql-tag';

export default gql`
  {
    users {
      id
      firstName
      lastName
      dob
      phone
      email
      company {
        name
      }
    }
  }
`;
