import React, { Component } from 'react';
import Loader from '../images/loader.gif';

const imageStyle = {
  height: '60px',
  width: '60px',
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
        <img src={Loader} style={imageStyle} alt='Loading.....'/>
      </div>
    );
  }
}

export default loader;
