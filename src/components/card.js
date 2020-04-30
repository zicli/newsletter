/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { CardStyles } from 'styles';

const CardContainer = styled.div`
  ${CardStyles.newsletterCard}
`;

const Card = () => (
  <CardContainer>
    <div className="square">
      <div className='inner-card'>
      <div className="cardHeader">
        <a href='#'>
          ZICLI SYNERGY OPENS DOOR TO FORIEGN SHIPPING GROUP
        </a>
      </div>
       <p className='cardText'>Apple is more than a tech company; it became a culture unto itself,
         a passion of most of people and the birthplace of the world’s most revolutionized products.
         The biggest thing to keep in mind with HTML is that all HTML code begins with an open tag.
        </p>
      <span className='cardAuthor'>Amaka Obiefo | April 19, 2020</span>
      </div>
    </div>
  </CardContainer>
);

export default Card;
