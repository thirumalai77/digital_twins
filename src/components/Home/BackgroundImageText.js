import React from 'react';
import { Button } from 'react-bootstrap';
function BackgroundImageText(){
    return (
        <div className="home-banner-image banner-style split-div">
            <div className="card-img-overlay banner-overlay"></div>
            <div className="banner-content container">
            <h2>You have questions, we have answers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime.</p>
            <p> <Button variant="primary">Contact Us</Button> </p>
            </div>
        </div>
    )
}

export default BackgroundImageText;