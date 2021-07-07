import React,{useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faNetworkWired,
    faCogs,
    faBuilding,
    faWrench,
    faDraftingCompass,
    faTree,
    faTrophy,
    faRecycle,
    faBomb
  } from '@fortawesome/free-solid-svg-icons';
function Services(){
    return(
        <>
        <div className="services-banner-image banner-style split-div">
            <div className="card-img-overlay banner-overlay"></div>
            <div className="banner-content container">
            <h1>Services</h1>
            </div>
        </div>

        <div class="container split-div">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Models">
            <div style={{textAlign:'left',marginLeft:10}}>   
            <h4 style={{marginTop:15}}>Models</h4>
                <p>A 3D model is a mathematical representation of something three-dimensional. 3D models are used to
                    portray real-world and conceptual visuals for better understanding and coordinjation in AEC industries. It
                    is being acclaimed by its advocates as a lifesaver for complicated projects because of its ability to correct
                    errors early in the design stage and accurately schedule construction.</p>
                <p>We deliver the models in designated software extensions such as .rvt, .nwc and so on...</p>
            </div> 
            </Tab>
            <Tab eventKey="profile" title="Shop Drawings">
            <div style={{textAlign:'left',marginLeft:10}}>   
            <h4 style={{marginTop:15}}>Shop Drawings</h4>
                <p>Design drawings are used in the early stage of design development as a means to communicate design
                    ideas and proposals. In comparison, shop drawings provide the details needed by a fabricator during
                    fabrication, assembly, installation and erection, such as the specified material, weld types and
                    connections. All our drawings will be given in CAD and PDF formats.</p>
            </div>
            </Tab>
            <Tab eventKey="contact" title="As-Built & Facilities Management">
            <div style={{textAlign:'left',marginLeft:10}}>   
            <h4 style={{marginTop:15}}>As-Built & Facilities Management</h4>
                <p>The simplest introduction to BIM for facilities managers is through digital twins. A digital twin is a 3D
                    digital replication of a physical building and the baseline model for a BIM record. A digital twin allows a
                    facilities manager to identify different elements of a building, isolate them for their information, and
                    understand the needs of both that specific element and its relationship to peripheral systems. We also
                    incorporate the data as per the industry CoBie standard.</p>
            </div>
            </Tab>
        </Tabs>
        </div>

        {/* <div class="container split-div text-left">
            <div class="col-lg-12">
                <h2 class="page-header">Service List</h2>
            </div>
            <div class="col-md-4 float-left">
                <div class="media">
                    <div class="pull-left">
                         <FontAwesomeIcon icon={faNetworkWired} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service One</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                        <FontAwesomeIcon icon={faCogs} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Two</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                    <FontAwesomeIcon icon={faTree} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Three</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 float-left">
                <div class="media">
                    <div class="pull-left">
                         <FontAwesomeIcon icon={faBuilding} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Four</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                    <FontAwesomeIcon icon={faBomb} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Five</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                        <FontAwesomeIcon icon={faWrench} className="services-social-icons" /> 
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Six</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 float-left">
                <div class="media">
                    <div class="pull-left">
                    <FontAwesomeIcon icon={faTrophy} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Seven</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                         <FontAwesomeIcon icon={faDraftingCompass} className="services-social-icons" /> 
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Eight</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="pull-left">
                    <FontAwesomeIcon icon={faRecycle} className="services-social-icons" />
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Service Nine</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
                    </div>
                </div>
            </div>
        </div> */}
        <div style={{clear:'both'}}></div>
    </>
    )
}

export default Services;