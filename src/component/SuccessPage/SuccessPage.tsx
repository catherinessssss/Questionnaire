import * as React from 'react';
import './SuccessPage.css';

const successImg = require('../../images/thanks.png');

const SuccessPage = () => (
  <div>
    <img src={successImg} alt="thanks" className="success-img"/>
  </div>
);

export default SuccessPage;
