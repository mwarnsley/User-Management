import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ApolloProvider} from 'react-apollo';

import ApolloClient from 'apollo-client';
import App from './components/App';

const client = new ApolloClient({});
const history = createBrowserHistory({basename: '/'});

render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
