/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {} from 'styles';
import { createBrowserHistory } from 'history';
import queryString from 'query-string';
import { Zoom } from 'react-reveal';
import { useMutation } from '@apollo/react-hooks';
import { ToastsStore } from 'react-toasts';
import HeroImage from '../images/hero.jpg';
import { ADD_SUBSCRIBERS } from '../graphql/mutations';

const SubContainer = styled.div``;

const GlobalBanner = () => {
  const [load2, setLoad] = useState({ loading2: false });
  const { loading2 } = load2;
  const history = createBrowserHistory();
  const parsed = queryString.parse(history.location.search);
  console.log(parsed);

  const [removeSubscribers, { loading, data }] = useMutation(ADD_SUBSCRIBERS);
  // useEffect(() => {
  //   if (parsed.token) {
  //     localStorage.setItem('token', parsed.token);
  //   }
  //   if (user && user.verified && parsed.token) {
  //     (
  //       setTimeout(() => {
  //         document.querySelector('.bg').remove();
  //       }, 2000));
  //   }
  // }, [parsed.token, user]);
  // const Resend = async () => {
  //   setLoad({ ...load2, loading2: true });
  //   await resendEmail(user.email);
  //   await loadUser();
  //   setLoad({ ...load2, loading2: false });
  // };
  // if (!token) return null;
  // if (user && user.verified && !parsed.token) return null;
  return (
    <>
      {
        <SubContainer>
         <h1>Unsubscribe User</h1>
        </SubContainer>
      }
    </>
  );
};

export default GlobalBanner;
