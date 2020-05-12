import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { GlobalStyle, Screen } from 'styles';
import { Nav, SingleNews } from 'components';
import { createBrowserHistory } from 'history';
import queryString from 'query-string';
import { useQuery } from '@apollo/react-hooks';
import { GET_ONE_NEWSLETTER } from '../graphql/queris';
import Loader from '../components/loader';

const NewsletterContainer = styled.div`
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

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleNewsletter = () => {
  const history = createBrowserHistory();
  const parsed = queryString.parse(history.location.search);
  const { id } = parsed;
  const { loading, data, error } = useQuery(GET_ONE_NEWSLETTER, {
    variables: { id: parseInt(`${id}`, 10) },
  });

  return (
    <>
      {
      <NewsletterContainer>
        <GlobalStyle />
        <Helmet>
          <meta charSet="utf-8" />
          { !data
            ? <title>Newsletter</title>
            : <title>{data.getOneNewsletter.title}</title>
          }
        </Helmet>
        {
          loading
          && <Fragment >
                  <LoaderContainer>
                  <Loader/>
                  </LoaderContainer>
                </Fragment>
        }
        {
          error && Redirect('/')
        }
        {
          data
          && <Fragment>
                  <Nav />
                  <SingleNews content={data.getOneNewsletter}/>
                </Fragment>
        }
      </NewsletterContainer>
      }
    </>
  );
};

export default SingleNewsletter;
