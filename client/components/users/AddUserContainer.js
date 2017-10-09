import React, {Component} from 'react';

import UserForm from './UserForm';

class AddUserContainer extends Component {
  render() {
    const {history} = this.props;
    return (
      <div id="add_user_container">
        <UserForm history={history} />
      </div>
    );
  }
}

export default AddUserContainer;
