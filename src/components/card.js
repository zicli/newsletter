/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { CardStyles } from 'styles';

const CardContainer = styled.div`
  ${CardStyles.newsletterCard}
`;

const Card = ({
  newsletter: {
    title, content, author, createdAt,
  },
}) => (
  <CardContainer className='square'>
    <div className='inner-card'>
        <div className="cardHeader">
          <a href='#'>
            {title}
          </a>
        </div>
        <div className="fit">
          <p className='cardText'>{content}</p>
        </div>
        <span className='cardAuthor'>{author} | {createdAt}</span>
    </div>
  </CardContainer>
);

export default Card;
