/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import Card from './card';

const NewsContainer = styled.div`
  margin: 0 0 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const NewsletterCard = () => (
  <NewsContainer>
    <Card/>
  </NewsContainer>
);

export default NewsletterCard;
