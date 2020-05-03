import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
  App,
  ErrorPage,
} from 'pages';

const { REACT_APP_API_URL } = process.env;
const client = new ApolloClient({
  uri: REACT_APP_API_URL,
});

class Main extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/404' component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </ApolloProvider>
    );
  }
}

export default Main;
