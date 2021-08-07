import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function BackgroundImageText(){
    const history = useHistory();
    return (
        <div className="home-banner-image banner-style split-div">
            <div className="card-img-overlay banner-overlay"></div>
            <div className="banner-content container">
            <h2>You have questions, we have answers</h2>
            <p>"Let's talk about your project. Send us a text message and we will be in touch within one business day."</p>
            <p> <Button onClick={()=> history.replace('/contactUs')} variant="primary">Contact Us</Button> </p>
            </div>
        </div>
    )
}

export default BackgroundImageText;