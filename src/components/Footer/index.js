import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <div className='footer-div'>
            <div className="footer-content"><p className='footer-text'>Copyright © 2021 Digital Twin Technologies Pvt. Ltd, All Rights Reserved.</p></div>
            <div className="footer-icons"><FontAwesomeIcon icon={faFacebook} className="footer-social-icons" />
            <FontAwesomeIcon icon={faTwitter} className="footer-social-icons" />
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-social-icons" /></div>
        </div>
    )
}

export default Footer;