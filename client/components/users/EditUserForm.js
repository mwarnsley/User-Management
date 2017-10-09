import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {map} from 'lodash';
import {Form, FormGroup, FormControl, ControlLabel, Button, Row, Col} from 'react-bootstrap';
import {validateEmail} from '../../helpers';
import fetchCompanies from '../../queries/fetchCompanies';
import fetchUser from '../../queries/fetchUser';
import editUser from '../../mutations/editUser';

class EditUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    companyId: '',
  };
  onSubmit = () => {
    const {firstName, lastName, dob, phone, email, companyId} = this.state;
    const {mutate, history} = this.props;
    mutate({
      variables: {
        firstName,
        lastName,
        dob,
        phone,
        email,
        companyId,
      },
      refetchQueries: [{query: fetchUsers}],
    }).then(() => history.push('/users'));
  };
  onFirstNameChange = e => {
    const firstName = e.target.value;
    this.setState({firstName});
  };
  onLastNameChange = e => {
    const lastName = e.target.value;
    this.setState({lastName});
  };
  onDOBChange = e => {
    const dob = e.target.value;
    this.setState({dob});
  };
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState({phone});
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState({email});
  };
  onCompanyChange = e => {
    const companyId = e.target.value;
    this.setState({companyId});
  };
  render() {
    const {fetchedCompanies, fetchedUser} = this.props;
    const companies = fetchedCompanies.companies;
    const user = fetchedUser.user;
    console.log(this.props);
    console.log(fetchedUser);
    return (
      <Form>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>User ID</ControlLabel>
              <FormControl disabled />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              <FormControl onChange={this.onFirstNameChange} type="text" placeholder="e.g John" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl onChange={this.onLastNameChange} type="text" placeholder="e.g Smith" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>DOB</ControlLabel>
              <FormControl onChange={this.onDOBChange} type="date" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Phone</ControlLabel>
              <FormControl onChange={this.onPhoneChange} type="text" placeholder="e.g 440-576-8698" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl onChange={this.onEmailChange} type="text" placeholder="e.g john.smith@gmail.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Company</ControlLabel>
              <FormControl onChange={this.onCompanyChange} componentClass="select" placeholder="Select Company">
                <option value="">Select Company</option>
                {map(companies, (company, idx) => (
                  <option key={idx} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.onSubmit}>Edit User</Button>
      </Form>
    );
  }
}

export default compose(
  graphql(editUser, {name: 'editUser'}),
  graphql(fetchCompanies, {name: 'fetchedCompanies'}),
  graphql(fetchUser, {name: 'fetchedUser'})
)(EditUserForm);
