import { css } from 'styled-components';
import Screen from './screen';


const HomePage = {
  hero: css`

  .heroContainer{
    position: relative;
    height: 65vh;
    width: 77vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 110px;
  }

  .heroText {
    flex: 1;
  }

  .heroImgCol {
   flex: 1
  }

  .heroquote1{
    font-size: 35px !important;
    font-weight: 900;
    color: #AD7271;
    text-align: start !important;
    white-space: pre;
    padding-bottom: 10px;
    margin-block-start: 0.8em;
    margin-block-end: 0;
    line-height: .95;
    letter-spacing: .9px
  }

  .herotext2{
    font-size: 11px;
    font-weight: 900;
    color: black;
    width: 80%;
    text-align: start;
    letter-spacing: 1px;
  }

  .heroForm {
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    margin-top: 30px;
  }

  .form-control {
    display: block;
    width: 45%;
    height: 35px;
    padding: .065rem .75rem;
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.0;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .65rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin: 0 10px 0 0;
  }

  .heroImg{
    height: 900px;
    position: relative;
    border-radius: 10px;
  }

  .img-fluid {
    border-radius: 20px;
  }

  ${Screen.screen1125`
    .heroquote1{
      font-size: 30px !important;
      line-height: .9;
    }
  `}

  ${Screen.pc`
    .heroquote1{
      font-size: 27px !important;
      line-height: .9;
    }
    .heroForm {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 19px;
    }
    .form-control {
      width: 69%;
      margin-bottom: 10px;
    }
  `}

  ${Screen.screen800`
    .form-control {
      width: 80%;
    }
    .heroImgCol{
      display: none;
    }
    .herotext2{
      font-size: 15px;
      width: 100%;
      letter-spacing: .5px;
    }
  `}
  ${Screen.miniTablet`
    .form-control {
      width: 96%;
    }

  `}
  ${Screen.largePhone`
  .heroquote1{
    font-size: 30px !important;
    line-height: 1;
  }
    .herotext2{
      margin-bottom: 30px;
      font-size: 15px;
    }
  `}
  ${Screen.smallPhone`
  .heroquote1{
    font-size: 25px !important;
  }
    .herotext2{
      font-size: 12px;
    }
  `}
`,
};


export default HomePage;