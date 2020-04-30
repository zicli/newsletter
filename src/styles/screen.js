import { css } from 'styled-components';

const sizes = {
  bigScreen: 1900,
  xxlarge: 1820,
  xlargePc: 1680,
  largePc: 1540,
  xlargeScreen: 1440,
  xxmidLarge: 1380,
  screen1360: 1360,
  xmidLarge: 1352,
  semiLarge: 1300,
  screen1288: 1288,
  midLarge: 1240,
  largeScreen: 1200,
  midScreen: 1191,
  screen1125: 1125,
  screen1100: 1100,
  pc: 1024,
  screen936: 936,
  screen903: 903,
  screen874: 874,
  screen800: 800,
  tablet: 768,
  screen666: 666,
  miniTablet: 600,
  screen643: 643,
  screen630: 630,
  largePhone: 480,
  xPhone: 460,
  midPhone: 430,
  screen425: 425,
  screen415: 415,
  iphone8: 414,
  phone: 376,
  screen360: 360,
  smallPhone: 330,
  screen320: 320,
};

// iterate through the sizes and create a media template
export const screen = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default screen;
