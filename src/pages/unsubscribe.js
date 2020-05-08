import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, Unsubscribe } from 'components';

const UnsubscriberContainer = styled.div``;

const Unsubscriber = () => (
  <UnsubscriberContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Unsubscibe User</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
    <Unsubscribe/>
  </UnsubscriberContainer>
);

export default Unsubscriber;
