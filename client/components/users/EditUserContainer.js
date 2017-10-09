import React, {Component} from 'react';

import EditUserForm from './EditUserForm';

class EditUserContainer extends Component {
  render() {
    const {history} = this.props;
    return (
      <div id="edit_user_container">
        <EditUserForm history={history} />
      </div>
    );
  }
}

export default EditUserContainer;
