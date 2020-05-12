/* eslint-disable radix */
import React from 'react';
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

const NewsletterContainer = styled.div``;

const history = createBrowserHistory();
const parsed = queryString.parse(history.location.search);
const { id } = parsed;

const Unsubscriber = () => {
  const { loading, data, error } = useQuery(GET_ONE_NEWSLETTER, {
    variables: { id: parseInt(id) },
  });

  return (
    <>
      {
      <NewsletterContainer>
        <GlobalStyle />
        <Helmet>
          <meta charSet="utf-8" />
          { !data
            ? <title>Single Newsletter</title>
            : <title>{data.getOneNewsletter.title}</title>
          }
        </Helmet>
        <Nav />
        { loading && <Loader/> }
        { error && Redirect('/') }
        { data && <SingleNews content={data.getOneNewsletter}/> }
      </NewsletterContainer>
      }
    </>
  );
};

export default Unsubscriber;
