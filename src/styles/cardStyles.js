import { css } from 'styled-components';
import Screen from './screen';
import Basics from './basics';

const CardStyle = {
  newsletterCard: css`

  .square{
    flex: 1 0 47%;
    height: 340px;
    border: .8px solid #f2f2f2;
    border-radius: 10px;
    border: 1px solid #f2f2f2;
    box-shadow: 0 5px 10px #f2f2f2;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin: 10px 7px;
    }

  .square:hover {
    -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .inner-card {
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    align-content: space-between;
  }

  .fit {
    max-height: 160px;
    overflow-y: hidden;
  }

  .cardHeader {
    font-size: 22px;
    line-height: 1.3;
    font-weight: 800;
  }

  .loading {
    display: flex;
    justify-content: center;
  }

  .cardHeader a {
    color:  ${Basics.colors.wineRed};

    &:hover, &:focus {
      text-decoration: ${Basics.colors.wineRed};
    }
  }

  .cardText {
    margin: 20px 0;
    font-size: 13px;
    color: #000;
    text-align: justify;
    font-weight: 700;
  }

  .cardAuthor {
    font-size: 11px;
    // margin-top: 50px;
    letter-spacing: .6px;
    font-weight: 500;
    color: ${Basics.colors.fadedRed}
  }

  ${Screen.screen936`
    .cardHeader {
      font-size: 19px;
      line-height: 1;
    }
  `};
  ${Screen.tablet`
    .cardHeader {
      font-size: 20px;
    }
    .square{
      flex: 1 0 100%;
      height: auto;
      margin: 15px 0;
      }
  `};
  `,
};

export default CardStyle;
