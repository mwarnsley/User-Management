import React, {Component} from 'react';

import UsersTable from '../users/UsersTable';

class UsersContainers extends Component {
  render() {
    return (
      <div id="users-container">
        <UsersTable />
      </div>
    );
  }
}

export default UsersContainers;
