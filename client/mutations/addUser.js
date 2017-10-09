import gql from 'graphql-tag';

export default gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $dob: String
    $phone: String!
    $email: String!
    $companyId: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      dob: $dob
      phone: $phone
      email: $email
      companyId: $companyId
    ) {
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
