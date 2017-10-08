import React, {Component} from 'react';

class UsersTable extends Component {
  render() {
    return (
      <table className="user-table table table-responsive table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Marcus</td>
            <td>Warnsley</td>
            <td>02-16-1987</td>
            <td>317-546-0877</td>
            <td>marcus.warnsley@gmail.com</td>
            <td>Google</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Samantha</td>
            <td>Jones</td>
            <td>05-23-1994</td>
            <td>317-758-3299</td>
            <td>sam.jones@gmail.com</td>
            <td>Apple</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default UsersTable;
