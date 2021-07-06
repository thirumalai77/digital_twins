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
            name:'BIM Manager',
            desigination: '',
            description:`Our BIM Manager is the person who is responsible for the implementation of Building Information
            Modelling (BIM) and digital construction procedures.
            He or she deals with organising the digital processes, supervising and generally coordinating orders and
            the specialised human resources involved in the BIM process. The BIM Manager manages also interacts
            mainly with two other management figures: the BIM Modeller and the BIM Coordinator; but possess the
            right background to make the final decisions independently. They have the practical knowledge that
            allows them to be fully involved in the management process and the creation of standards and
            documentation.`
        },
        {
            profileImage:sliderImageTwo,
            name:'BIM Cooridnator',
            desigination: '',
            description:`Our BIM coordinator coordinates the process of generating and managing digital models of places;
            building information models are virtual files that help with decision-making during the building process.
            Our coordinators are well-educated in not only the industry in which they works, but in all aspects of
            construction as well.
            Aside from time spent in the office, our coordinator also likely spends substantial time at job/build sites
            to inspect the project and witness progress as it happens; the coordinator can compare real-time
            progress to the building model plan and revise when needed.`
        },
        {
            profileImage:sliderImageThree,
            name:'BIM Modeller',
            desigination: '',
            description:`Our BIM modeler is the person who actually makes the model. He/She will model the elements, will
            add the requirement information to the elements. They are able to make new elements (custom revit
            families for example). He knows how to make schedules which support him in modelling. Modelling for
            us, is making a 3D element PLUS adding the right info to it.
            We always like to team up engineers with a modeler. The BIM engineer brings input to the model. He (or
            she) has the technical knowledge that needs to be brought into the model. It's the responsibility of the
            engineer to make this happen.`
        }
        // {
        //     profileImage:sliderImageFour,
        //     name:'Robert Downey',
        //     desigination: 'Technical Lead',
        //     description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        // }
    ];
    return(
        <Container className="content-div">
            <Row>
            <Col className="col-md-6">
                <img className="img-responsive" src={sliderImageTwo} alt=""/>
            </Col>
            <Col className="col-md-6 text-left">
                <h2>About Digital Twin</h2>
                <p>We're an independently owned strategic creative agency forever curious and ready to transform the way business is done.</p>
                <p>Although we are a well-oiled machine, our people are talented and we cultivate the importance of honoring their respective crafts. It helps to better serve both each other and our partners and it shows in everything from what we design and produce, so what we value and believe.</p>
            </Col>
            </Row>
            <div className="row">
            <div className="col-lg-12">
                <h2 className="page-header">Our Team</h2>
            </div>
            {TeamObj.map((team)=>{
                return(
                    <div className="col-md-3 text-center">
                        <div className="thumbnail">
                            <img className="team-profile-img" src={team.profileImage} alt=""/>
                            <div className="caption">
                                <h3>{team.name}<br/>
                                    <small>{team.desigination}</small>
                                </h3>
                                <p>{team.description}</p>
                                {/* <ul className="list-inline">
                                    <li><FontAwesomeIcon icon={faFacebook} className="team-social-icons" />
                                    </li>
                                    <li><FontAwesomeIcon icon={faTwitter} className="team-social-icons" />
                                    </li>
                                    <li><FontAwesomeIcon icon={faLinkedinIn} className="team-social-icons" />
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
            )}) }
        </div>
        </Container>
    )
}
export default About;