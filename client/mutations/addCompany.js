import gql from 'graphql-tag';

export default gql`
  mutation AddCompany($name: String!, $description: String!) {
    addCompany(name: $name, description: $description) {
      name
      description
    }
  }
`;
