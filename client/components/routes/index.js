import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UserContainer from '../users/UsersContainer';
import AddUserContainer from '../users/AddUserContainer';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserContainer} />
      <Route path="/adduser" component={AddUserContainer} />
    </Switch>
  </BrowserRouter>
);
