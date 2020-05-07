import { createGlobalStyle } from 'styled-components';
import Basics from './basics';
import Screen from './screen';
import * as Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monoton';
    src: url(${Fonts.MonotonRegularTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldTTF}) format ('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldItalicTFF}) format ('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansItalicTTF}) format ('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansRegularTTF}) format ('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Lilita One';
    src: url(${Fonts.LilitaOneRegularTTF}) format ('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Baloo Bhaina';
    src: url(${Fonts.BalooBhainaRegullarTTF}) format ('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    color: ${Basics.colors.creamWhite};
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${Basics.colors.white};
      outline: 0;
    }
  }

  p {
    font-size: 13px;
    font-family: ${Basics.fonts.NotoSans};
    color: ${Basics.colors.chalkBlue};
    font-weight: 900;
    word-spacing: 2px;

  }

  ol {
    counter-reset: item;
    list-style-type: none;
    margin-left: -2.5em;
  }
  li {
    display: block;
    font-size: 28px;
    font-family: ${Basics.fonts.BalooBhaina};
    color: ${Basics.colors.deepBlue};
    font-weight: 500;
    word-spacing: 2px;

    ${Screen.tablet`
      font-size: 22px;
    `};
  }

  li:before {
    content: counter(item, decimal-leading-zero) ". ";
    counter-increment: item;
    color: ${Basics.colors.deepBlue};
    font-weight: 400;
  }

  .btn-primary {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background:  ${Basics.colors.brightOrange};
    padding: 0.2rem 0.9rem;
    border: 3px solid ${Basics.colors.brightOrange};
    border-radius: 5px;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .btn-primary:hover {
    background: ${Basics.colors.bloodRed};
    border: 3px solid ${Basics.colors.bloodRed};
  }

  .bm-item {
    text-decoration: none;
    outline: 0;
    margin-bottom: 20px;
    transition: ${Basics.transition};
  }

  .bm-burger-button {
    display: none;
    ${Screen.largePhone`
      display: inline;
    `};
    position: fixed;
    width: 25px;
    height: 15px;
    top: 29px;
    right: 25px;
  }

  .bm-burger-bars {
    background: ${Basics.colors.fadedRed};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${Basics.colors.fadedRed};
  }

  .bm-menu {
    background: ${Basics.colors.creamWhite};
    padding: 15.5em 1.5em 1.5em 1.5em;
    font-size: 1.15em;
    font-weight: 700;
  }

  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .lds-dual-ring {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    margin: -3px 2px 0 6px;
    border-radius: 50%;
    border: 4px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

export default GlobalStyle;
