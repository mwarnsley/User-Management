import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import SimpleLineChart from '../charts/SimpleLineChart';
import SimpleBarChart from '../charts/SimpleBarChart';
import StackedAreaChart from '../charts/StackedAreaChart';
import SimpleComposedChart from '../charts/ComposedChart';

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
        <Row>
          <Col md={6}>
            <StackedAreaChart />
          </Col>
          <Col md={6}>
            <SimpleComposedChart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeContainer;
