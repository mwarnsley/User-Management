import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import fetchCompanies from '../../queries/fetchCompanies';

class CompanyList extends Component {
  render() {
    const {data} = this.props;
    const companies = data.companies;
    return (
      <div id="companies_container">
        <Link to="/companies/addcompany" className="btn btn-default">
          Add Company
        </Link>
        <table className="table table-striped table-hover company-table">
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Company Name</th>
              <th>Company Description</th>
            </tr>
          </thead>
          <tbody>
            {map(companies, (company, idx) => (
              <tr key={idx}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(fetchCompanies)(CompanyList);
