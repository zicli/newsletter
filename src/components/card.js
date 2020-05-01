/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { CardStyles } from 'styles';

const CardContainer = styled.div`
  ${CardStyles.newsletterCard}
`;

const Card = ({
  title, desc, author, createdAt,
}) => (
  <CardContainer className='square'>
    <div className='inner-card'>
      <div className="cardHeader">
        <a href='#'>
          {title}
        </a>
      </div>
      <p className='cardText'>{desc}</p>
      <span className='cardAuthor'>{author} | {createdAt}</span>
      </div>
  </CardContainer>
);

export default Card;
