import React,{useState} from 'react';
import contactForm from '../../ContactForm.php';
function ContactUs(){
    return(
        <>
        <div className={'container'}>
            <div class="col-md-8 split-div float-left">
                <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d57800.01325236461!2d55.172173520097125!3d25.118753401972594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!1s0x3e5f6bc1af6c4c71%3A0xf083c1c6ad64697b!3m2!1d25.1186798!2d55.2071932!4m5!1s0x3e5f6bc1af6c4c71%3A0xf083c1c6ad64697b!2sThe%20Iridium%20-%20Al%20BarshaAl%20Barsha%201%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.1186798!2d55.2071932!5e0!3m2!1sen!2sin!4v1628343180034!5m2!1sen!2sin"></iframe>
            </div>
            <div class="col-md-4 split-div float-left text-left">
                <h3>Contact Details</h3>
                <p style={{marginBottom:5}}> Suite 17, The Iridium Building, Umm Suqeim Road </p>
                {/* <p style={{marginBottom:5}}><i class="fa fa-phone"></i> 
                    <abbr title="Phone">P</abbr>: (123) 456-7890</p> */}
                <p style={{marginBottom:5}}><i class="fa fa-envelope-o"></i> 
                    <abbr title="Email">E</abbr>: <a href="mailto:Enquiry@digitaltwintec.com">Enquiry@digitaltwintec.com</a>
                </p>
                <p style={{marginBottom:5}}><i class="fa fa-clock-o"></i> 
                    <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
                <ul class="list-unstyled list-inline list-social-icons">
                    <li>
                        <a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-google-plus-square fa-2x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
<div style={{clear:'both'}}></div>
<div class="container text-left split-div" style={{marginBottom:15}}>
<div class="col-md-8">
    <h3>Send us a Message</h3>
    <form name="sentMessage" id="contactForm" method='post' action="mailto:Enquiry@digitaltwintec.com" novalidate>
        <div class="control-group form-group">
            <div class="controls">
                <label>Full Name:</label>
                <input type="text" class="form-control" id="name" name='name' required data-validation-required-message="Please enter your name." />
                <p class="help-block"></p>
            </div>
        </div>
        <div class="control-group form-group">
            <div class="controls">
                <label>Phone Number:</label>
                <input type="tel" class="form-control" id="phone" name='phone' required data-validation-required-message="Please enter your phone number." />
            </div>
        </div>
        <div class="control-group form-group">
            <div class="controls">
                <label>Email Address:</label>
                <input type="email" class="form-control" id="email" name='email' required data-validation-required-message="Please enter your email address." />
            </div>
        </div>
        <div class="control-group form-group">
            <div class="controls">
                <label>Message:</label>
                <textarea rows="10" cols="100" class="form-control" id="message" name='message' required data-validation-required-message="Please enter your message" maxlength="999" style={{reSize:'none'}}></textarea>
            </div>
        </div>
        <div id="success"></div>
        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
</div>
</div>
</>
)}

export default ContactUs;