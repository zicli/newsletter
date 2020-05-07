/* eslint-disable no-tabs */
import React, { useState } from 'react';
import styled from 'styled-components';
import { HomePage } from 'styles';
import { Zoom } from 'react-reveal';
import { useMutation } from '@apollo/react-hooks';
import { ToastsStore } from 'react-toasts';
import HeroImage from '../images/hero.jpg';
import { ADD_SUBSCRIBERS } from '../graphql/mutations';
import ButtonLaoder from './buttonLaoder';

const HeroStyle = styled.div`
${HomePage.hero}
`;

const HeroBtn = styled.div`
height: 25px;
width: 120px;
text-align: center;
`;

const Hero = () => {
  const [email, setEmail] = useState('');

  const [addSubscribers, { loading, error }] = useMutation(ADD_SUBSCRIBERS, { errorPolicy: 'all' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === '') return ToastsStore.warning('Please input your Email!!');
      await addSubscribers({ variables: { email } });
      if (error) return ToastsStore.error(error);
      setEmail('');
      return ToastsStore.success('You Have Subscribed to Zicli Newsletters');
    } catch (err) {
      setEmail('');
    }
  };

  return (
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
            <form className='heroForm'>
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                value={email}
                name='email'
                onChange={(e) => (setEmail(e.target.value))}
              />
                <HeroBtn
                  className='btn-primary'
                  type='submit'
                  role='button'
                  onClick={handleSubmit}
                  >
                    Subscribe
                    { loading && <ButtonLaoder/> }
                </HeroBtn>
            </form>
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
};

export default Hero;
