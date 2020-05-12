import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, CardStyles } from 'styles';
import { Zoom } from 'react-reveal';

const ContentContainer = styled.div`
  ${CardStyles.newsletterCard},
  position: relative;
  padding: 10px 20px;
  margin: 100px 0;
`;

const Title = styled.h2`
  font-size: ${Basics.fontSize.medium};
  color: ${Basics.colors.bloodRed};
  font-weight: 700;
  margin: 0px;
  ${Screen.largePhone`
  font-size: 22px;
  `};
  ${Screen.smallPhone`
    font-size: 22px;
  `};
`;
const SubTitle = styled.h2`
  margin: 0px 0px 0px 0px;
  font-size: ${Basics.fontSize.small};
`;
const BodyText = styled.p`
  padding-top: 50px;
  font-size: 15px;
  font-weight: 500;
  text-align: justify;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
  ${Screen.smallPhone`
    font-size: ${Basics.fontSize.xsmall};
  `};
`;

const Page = ({ content }) => (
  <Zoom>
    <ContentContainer>
        <img src={content.headerImage} alt={content.title} className='contentImage'/>
      <Title>{content.title}</Title>
      <SubTitle>
        {content.category} by {content.author}
      </SubTitle>
      <BodyText dangerouslySetInnerHTML={{ __html: content.content }} />
    </ContentContainer>
  </Zoom>
);

export default Page;
