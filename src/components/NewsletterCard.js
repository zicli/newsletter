/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Newsletter } from 'config';
import { Zoom } from 'react-reveal';
import { CardStyles, Screen } from 'styles';
import Card from './card';

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
    ${Screen.pc`
      margin-top: -510px;
    `};
    ${Screen.screen800`
      margin-top: -530px;
    `};
    ${Screen.tablet`
      margin-top: -450px;
    `};
    ${Screen.screen666`
      margin-top: -550px;
    `};
    ${Screen.screen630`
      margin-top: -150px;
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

const cards = Newsletter.letters.map((item, i) => <Card key={i}
    title={item.title}
    desc={item.desc}
    author={item.author}
    createdAt={item.createdAt}
  />);

const NewsletterCard = () => (
  <Zoom>
     <NewsContainer>
       {cards}
    </NewsContainer>
  </Zoom>

);

export default NewsletterCard;
