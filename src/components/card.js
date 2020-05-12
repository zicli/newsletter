import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardStyles } from 'styles';
import moment from 'moment';

const CardContainer = styled.div`
  ${CardStyles.newsletterCard}
`;

const subtractString = (content, length, ending) => content.substring(0, length - ending.length) + ending;

const textTruncate = (title, content, length, ending = '........') => {
  if (typeof content === 'number') {
    const firstLength = content;
    return title.length > firstLength ? subtractString(title, firstLength, ending) : title;
  }
  if (title.length < 35) {
    const secondLength = length + 95;
    return content.length > secondLength ? subtractString(content, secondLength, ending) : content;
  }
  return content.length > length ? subtractString(content, length, ending) : content;
};

const Card = ({
  newsletter: {
    id, title, content, author, createdAt,
  },
}) => (
  <CardContainer className='square'>
    <div className='inner-card'>
        <div className="cardHeader">
          <Link to={`/newsletter?id=${id}`} data-content className='headerLink'>
            {textTruncate(title, 62)}
          </Link>
        </div>
        <div className="fit">
          <p className='cardText'>{textTruncate(title, content, 300)}</p>
        </div>
        <span className='cardAuthor'>{author} | {moment(createdAt).format('Do MMMM, YYYY')}</span>
    </div>
  </CardContainer>
);

export default Card;
