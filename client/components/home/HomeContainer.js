import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import SimpleLineChart from '../charts/SimpleLineChart';
import SimpleBarChart from '../charts/SimpleBarChart';

class HomeContainer extends Component {
  render() {
    return (
      <div id="home_container">
        <Row>
          <Col md={6}>
            <SimpleLineChart />
          </Col>
          <Col md={6}>
            <SimpleBarChart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeContainer;
