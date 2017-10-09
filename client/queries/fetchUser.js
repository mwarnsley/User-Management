import gql from 'graphql-tag';

export default gql`
  {
    user(id: "r1gFuVu2Z") {
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
