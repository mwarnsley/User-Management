import React, {Component} from 'react';

import CompanyForm from './CompanyForm';

class AddCompanyContainer extends Component {
  render() {
    const {history} = this.props;
    return (
      <div id="add_company_container">
        <CompanyForm history={history} />
      </div>
    );
  }
}

export default AddCompanyContainer;
