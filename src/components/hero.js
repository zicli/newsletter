/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import { HomePage } from 'styles';
import { Zoom } from 'react-reveal';
import { useMutation, onError } from '@apollo/react-hooks';
import {
  ToastsContainer, ToastsStore, ToastContainer, ToastsContainerPosition,
} from 'react-toasts';
import HeroImage from '../images/hero.jpg';
import { ADD_SUBSCRIBERS } from '../graphql/mutations';

const HeroStyle = styled.div`
${HomePage.hero}
`;

const HeroBtn = styled.div`
height: 25px;
width: 120px;
text-align: center;
`;

const Hero = () => {
  let input;
  const [addSubscribers, { loading, data, error }] = useMutation(ADD_SUBSCRIBERS);

  // const onChange = (node) => { input = node; };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   addSubscribers({ variables: { email: input.value } });
  //   if (error.stringify() === 'Error: Network error: Failed to fetch') {
  //     console.log(error);
  //   }
  //   input.value = '';
  // };

  return (
    <HeroStyle>
       { error
          && error === 'Error: Network error: Failed to fetch'
         ? ToastsStore.error('Network error: Failed to fetch')
         : ToastsStore.error('Email Already Exist')
        }
        {
          loading
          && ToastsStore.success('Hey, you just clicked!')
        }
      <div className="heroContainer">
        <ToastsContainer store={ToastsStore}/>
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
                name='email'
                ref={(node) => {
                  input = node;
                }}
              />
                <HeroBtn
                  className='btn-primary'
                  type='submit' role='button'
                  onClick={(e) => {
                    e.preventDefault();
                    addSubscribers({ variables: { email: input.value } });
                    input.value = '';
                  }}
                  >
                    Subscribe
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
