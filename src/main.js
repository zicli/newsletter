import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import {
  App,
  ErrorPage,
} from 'pages';

const { REACT_APP_API_URL } = process.env;
const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  onError({ graphQLErrors, networkError }) {
    if (graphQLErrors) graphQLErrors.forEach(({ message }) => ToastsStore.error(`${message}`));
    // if (networkError) ToastsStore.error(`${networkError}`);
  },
});

class Main extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ToastsContainer store={ToastsStore} lightBackground/>
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
