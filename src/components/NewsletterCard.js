/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Newsletter } from 'config';
import { Zoom } from 'react-reveal';
import { CardStyles, Screen } from 'styles';
import { connect } from 'react-redux';
import { getNewsletter } from '../redux/action/newsletter';
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

export class NewsletterCard extends Component {
  componentDidMount() {
    this.props.getNewsletter();
  }

  render() {
    const cards = Newsletter.letters.map((item, i) => <Card key={i}
      title={item.title}
      desc={item.desc}
      author={item.author}
      createdAt={item.createdAt}
    />);
    return (
      <Zoom>
        <NewsContainer>
          {cards}
      </NewsContainer>
    </Zoom>
    );
  }
}

// function mapStateToProps(params) {

// }

export default connect(null, { getNewsletter })(NewsletterCard);
