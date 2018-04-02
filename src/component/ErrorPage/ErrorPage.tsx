import * as React from 'react';
import './ErrorPage.css';

const errorImg = require('../../images/error.png');

const ErrorPage = () => (
  <div className="error-div">
    <img src={errorImg} alt="error" className="error-img"/>
  </div>
);

export default ErrorPage;
