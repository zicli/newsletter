import React, { useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import queryString from 'query-string';
import { Zoom } from 'react-reveal';
import { useMutation } from '@apollo/react-hooks';
import { Screen } from 'styles';
import Logo from '../images/ziclilogo.png';
import { REMOVE_SUBSCRIBERS } from '../graphql/mutations';
import Loader from './loader';

const SubContainer = styled.div`
  margin: 10% 5% 20px;
  height: 100%;
  text-align: center;
  ${Screen.screen874`
    margin-top: 28%;
  `};
  ${Screen.miniTablet`
    margin-top: 32%;
  `};
  ${Screen.largePhone`
    margin-top: 35%;
  `};
  ${Screen.screen360`
    margin-top: 45%;
  `};
`;

const GlobalBanner = () => {
  const history = createBrowserHistory();
  const parsed = queryString.parse(history.location.search);

  const [removeSubscribers, { loading, data, error }] = useMutation(REMOVE_SUBSCRIBERS, {
    onError() {
      return Redirect('/');
    },
  });

  useEffect(() => {
    removeSubscribers({ variables: { email: parsed.email } });
  }, [error, removeSubscribers, parsed.email]);

  const imageStyle = {
    height: '85px',
    width: '85px',
    marginTop: '35px',
  };

  return (
    <>
      {
        <SubContainer>
         { loading && <Loader/> }
         { error && Redirect('/') }
         {
           data && <Fragment>
             <Zoom>
               <p className="unsubscribeText">You have been successfully</p>
               <span className="unsubscribeStrong">UNSUBSCRIBED</span>
               <p className="unsubscribeText">from our newsletter</p>
                <Link to='/'>
                  <img src={Logo} alt="Zicli Logo" style={imageStyle}/>
                </Link>
             </Zoom>
           </Fragment>
          }
        </SubContainer>
      }
    </>
  );
};

export default GlobalBanner;
