import React, {Component} from 'react';

import CompanyList from './CompanyList';

class CompaniesContainer extends Component {
  render() {
    return (
      <div id="companies_container">
        <CompanyList />
      </div>
    );
  }
}

export default CompaniesContainer;
