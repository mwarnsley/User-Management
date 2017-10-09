import React from 'react';
import {Grid, Row} from 'react-bootstrap';

import Navigation from './nav/Navigation';
import UsersContainer from './users/UsersContainer';
import Routes from './routes/index';

const App = () => {
  return (
    <div id="app_container">
      <Navigation />
      <Grid>
        <Routes />
      </Grid>
    </div>
  );
};

export default App;
