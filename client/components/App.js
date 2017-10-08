import React from 'react';
import {Grid, Row} from 'react-bootstrap';

import Navigation from './nav/Navigation';
import UsersContainer from './users/UsersContainer';

const App = () => {
  return (
    <div id="app_container">
      <Navigation />
      <Grid>
        <UsersContainer />
      </Grid>
    </div>
  );
};

export default App;
