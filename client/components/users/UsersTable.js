import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {map} from 'lodash';
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import fetchUsers from '../../queries/fetchUsers';
import deleteUser from '../../mutations/deleteUser';

class UsersTable extends Component {
  deleteUser = id => {
    const {mutate} = this.props;
    mutate({
      variables: {
        id,
      },
      refetchQueries: [{query: fetchUsers}],
    });
  };
  render() {
    const {data} = this.props;
    const users = data.users;
    return (
      <div id="users_table_container">
        <NavLink to="/users/adduser" className="btn btn-default">
          Add User
        </NavLink>
        <table className="user-table table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {map(users, (user, idx) => (
              <tr key={idx} className="table-user">
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.dob || ''}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <NavLink to={`/users/edituser/${user.id}`} className="btn btn-default btn-info">
                    Edit
                  </NavLink>
                  <Button className="btn btn-default btn-danger" onClick={() => this.deleteUser(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(deleteUser)(graphql(fetchUsers)(UsersTable));
