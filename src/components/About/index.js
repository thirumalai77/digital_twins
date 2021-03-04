import React,{useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import sliderImageOne from '../../assets/images/HomeSlider/Slide_1.jpeg';
import sliderImageTwo from '../../assets/images/HomeSlider/Slide_2.jpeg';
import sliderImageThree from '../../assets/images/HomeSlider/Slide_3.jpeg';
import sliderImageFour from '../../assets/images/HomeSlider/Slide_4.jpeg';
function About(){
    const TeamObj = [
        {
            profileImage:sliderImageOne,
            name:'John Smith',
            desigination: 'BIM Modeler',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            profileImage:sliderImageTwo,
            name:'Micheal Bose',
            desigination: 'BIM Modeler',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            profileImage:sliderImageThree,
            name:'Dwayne Johnson',
            desigination: 'Managing Director',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            profileImage:sliderImageFour,
            name:'Robert Downey',
            desigination: 'Technical Lead',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        }
    ];
    return(
        <Container className="content-div">
            <Row>
            <Col className="col-md-6">
                <img className="img-responsive" src={sliderImageTwo} alt=""/>
            </Col>
            <Col className="col-md-6 text-left">
                <h2>About Digital Twin</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
            </Col>
            </Row>
            <div class="row">
            <div class="col-lg-12">
                <h2 class="page-header">Our Team</h2>
            </div>
            {TeamObj.map((team)=>{
                return(
                    <div class="col-md-3 text-center">
                        <div class="thumbnail">
                            <img class="team-profile-img" src={team.profileImage} alt=""/>
                            <div class="caption">
                                <h3>{team.name}<br/>
                                    <small>{team.desigination}</small>
                                </h3>
                                <p>{team.description}</p>
                                <ul class="list-inline">
                                    <li><FontAwesomeIcon icon={faFacebook} className="team-social-icons" />
                                    </li>
                                    <li><FontAwesomeIcon icon={faTwitter} className="team-social-icons" />
                                    </li>
                                    <li><FontAwesomeIcon icon={faLinkedinIn} className="team-social-icons" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            )}) }
        </div>
        </Container>
    )
}
export default About;