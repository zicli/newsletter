import { css } from 'styled-components';
import Screen from './screen';
import Basics from './basics';

const CardStyle = {
  newsletterCard: css`

  .cardContainer {
    margin: 0 0 100px;
  }

  .square:hover {
    -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .square{
  width: 49%;
  height: 265 px;
  border: .5px solid #f2f2f2;
  background: white;
  border-radius: 6px;
  border: 1px solid #
  box-shadow: 0 2px 4px #f2f2f2;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  }

  .inner-card {
    padding: 35px;
  }

  .cardHeader {
    font-size: 22px;
    line-height: 1.3;
    font-weight: 800;
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
    font-weight: 700;
  }

  .cardAuthor {
    font-size: 11px;
    letter-spacing: .6px;
    font-weight: 500;
    color: ${Basics.colors.fadedRed}

  }
  `,
};

export default CardStyle;
