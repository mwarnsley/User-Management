import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeContainer from '../home/HomeContainer';
import UsersContainer from '../users/UsersContainer';
import AddUserContainer from '../users/AddUserContainer';
import CompaniesContainer from '../companies/CompaniesContainer';
import AddCompanyContainer from '../companies/AddCompanyContainer';

export const routes = {
  home: {
    path: '/',
    component: HomeContainer,
    exact: true,
  },
  users: {
    path: '/users',
    component: UsersContainer,
    exact: true,
  },
  addUsers: {
    path: '/users/adduser',
    component: AddUserContainer,
    exact: true,
  },
  companies: {
    path: '/companies',
    component: CompaniesContainer,
    exact: true,
  },
  addCompanies: {
    path: '/companies/addcompany',
    component: AddCompanyContainer,
    exact: true,
  },
};

const routesArray = Object.values(routes);

export const appRoutes = (
  <Switch>
    {routesArray.map((route, index) => (
      <Route key={index} exact={route.exact} path={route.path} component={route.component} />
    ))}
  </Switch>
);
