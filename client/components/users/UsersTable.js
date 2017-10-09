import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import fetchUsers from '../../queries/fetchUsers';

class UsersTable extends Component {
  render() {
    const {data} = this.props;
    const users = data.users;
    return (
      <div id="users_table_container">
        <Link to="/adduser" className="btn btn-default">
          Add User
        </Link>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(fetchUsers)(UsersTable);
