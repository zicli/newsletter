import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav, Hero, NewsletterCard,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 150px;
  ${Screen.pc`
  margin-left: 110px;
  margin-right: 90px;
`};
  ${Screen.screen936`
  margin:0 100px;
`};
  ${Screen.tablet`
  margin: 0 95px;
`};
${Screen.miniTablet`
  margin: 0 95px;
`};
  ${Screen.screen630`
  margin: 0 40px;
`};
  ${Screen.largePhone`
  margin: 0 30px;
`};
  ${Screen.screen320`
  margin: 0 30px;
`};
`;

const App = () => (
  <AppContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Home</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
    <Hero/>
    <NewsletterCard/>
  </AppContainer>
);

export default App;
