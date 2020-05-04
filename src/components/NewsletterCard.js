/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';
import { CardStyles, Screen } from 'styles';
import Card from './card';
import { GET_NEWSLETTERS } from '../graphql/query/queries';
import Loader from './loader';

const NewsContainer = styled.div`
  ${CardStyles.newsletterCard}
    position: relative;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 150px;
    ${Screen.semiLarge`
      margin-top: -150px
    `};
    ${Screen.midScreen`
      margin-top: -400px;
    `};
    ${Screen.screen1100`
      margin-top: -100px;
    `};
    ${Screen.pc`
      margin-top: -530px;
    `};
    ${Screen.screen980`
      margin-top: -100px;
    `};
    ${Screen.screen903`
      margin-top: -100px;
    `};
    ${Screen.screen800`
      margin-top: -530px;
    `};
    ${Screen.tablet`
      margin-top: -450px;
    `};
    ${Screen.screen666`
      margin-top: 40px;
    `};
    ${Screen.screen630`
      margin-top: -150px;
    `};
    ${Screen.miniTablet`
      margin-top: -250px;
    `};
    ${Screen.largePhone`
      margin-top: -200px;
    `};
    ${Screen.screen425`
      margin-top: -140px;
    `};
    ${Screen.phone`
      margin-top: -90px;
    `};
`;

const NewsletterCard = () => {
  const { loading, data } = useQuery(GET_NEWSLETTERS);

  return (
    <Zoom>
      <NewsContainer>
        { loading
          && <Fragment>
            <div className='loading'>
              <Loader/>
            </div>
            </Fragment>
        }
        { !data && null }
        {
          data && data.getAllNewsletters.map((item, i) => (
          <Card key={i} newsletter={item} />))
        }
      </NewsContainer>
    </Zoom>
  );
};


export default NewsletterCard;
