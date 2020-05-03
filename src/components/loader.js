import React, { Component } from 'react';
import Loader from '../images/loader.gif';

const image = {
  height: '50px',
  width: '50px',
};

const loaderStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export class loader extends Component {
  render() {
    return (
      <div style={loaderStyle}>
        <img src={Loader} style={image} alt='Loading.....'/>
      </div>
    );
  }
}

export default loader;
