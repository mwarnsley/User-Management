import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {map} from 'lodash';
import {Form, FormGroup, FormControl, ControlLabel, Button, Row, Col} from 'react-bootstrap';
import fetchCompanies from '../../queries/fetchCompanies';
import addCompany from '../../mutations/addCompany';
import addUser from '../../mutations/addUser';

class UserForm extends Component {
  state = {
    name: '',
    description: '',
  };
  onSubmit = () => {
    const {name, description} = this.state;
    const {mutate, history} = this.props;
    mutate({
      variables: {
        name,
        description,
      },
      refetchQueries: [{query: fetchCompanies}],
    }).then(() => history.push('/companies'));
  };
  onNameChange = e => {
    const name = e.target.value;
    this.setState({name});
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({description});
  };
  render() {
    return (
      <Form>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl onChange={this.onNameChange} type="text" placeholder="e.g Google" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                onChange={this.onDescriptionChange}
                type="textarea"
                placeholder="e.g A small technology company etc..."
              />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={this.onSubmit}>Add Company</Button>
      </Form>
    );
  }
}

export default graphql(addCompany)(graphql(fetchCompanies)(UserForm));
