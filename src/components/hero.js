/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import { HomePage } from 'styles';
import { Zoom } from 'react-reveal';
import HeroImage from '../images/hero.jpg';

const HeroStyle = styled.div`
${HomePage.hero}
`;

const HeroBtn = styled.div`
height: 25px;
width: 120px;
text-align: center;

`;

const hero = () => (
  <HeroStyle>
    <div className="heroContainer">

      <div className="heroText">
        <h1 className='heroquote1'>
          {'WELCOME TO\nOUR NEWSLETTER'}
        </h1>
        <p className='herotext2'>Stay Up to date with Everything in Zicli Synergy with
          Weekly Newsletter delivered straight of your email address
        </p>
        <Zoom>
          <div className='heroForm'>
            <input type='text' className='form-control' placeholder='Email'/>
              <HeroBtn className='btn-primary'>
                Subscribe
              </HeroBtn>
          </div>
        </Zoom>
      </div>

      <div className="heroImgCol">
        <Zoom>
          <div className="heroImg">
            <img src={HeroImage} alt='dot' className='img-fluid' style={{ width: '100%' }} />
          </div>
        </Zoom>
      </div>

    </div>
  </HeroStyle>
);

export default hero;
