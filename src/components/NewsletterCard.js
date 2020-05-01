/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Newsletter } from 'config';
import { Zoom } from 'react-reveal';
import { CardStyles } from 'styles';
import Card from './card';

const NewsContainer = styled.div`
  ${CardStyles.newsletterCard}
    position: relative;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 40px 0 100px;
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
