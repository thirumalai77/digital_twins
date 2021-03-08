import React,{useRef} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImageOne from '../../assets/images/HomeSlider/Slide_1.jpeg';
import sliderImageTwo from '../../assets/images/HomeSlider/Slide_2.jpeg';
import sliderImageThree from '../../assets/images/HomeSlider/Slide_3.jpeg';
import sliderImageFour from '../../assets/images/HomeSlider/Slide_4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
  } from '@fortawesome/free-regular-svg-icons';
function Homecontentslider(props){
    const sliderRef = useRef();
    const TeamObj = [
        {
            bannerImage:sliderImageOne,
            title:'John Smith',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            bannerImage:sliderImageTwo,
            title:'Micheal Bose',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            bannerImage:sliderImageThree,
            title:'Dwayne Johnson',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        },
        {
            bannerImage:sliderImageFour,
            title:'Robert Downey',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe et quisquam nesciunt maxime."
        }
    ];
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
      const next = () => {
        sliderRef.current.slickNext();
      }
      const previous = () => {
        sliderRef.current.slickPrev();
      }
      return (
        <div className='home-content-slider'>
        <div className='container'>
          <h3 className='heading'>Engineering Solutions</h3>
          <div className='arrow-styles'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={previous} className="home-social-icons" />
          <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={next} className="home-social-icons" />
        </div>
          <Slider ref={sliderRef} {...settings}>
          {TeamObj.map((home)=>{
                return(
                    <div className="col-md-11">
                        <div>
                            <img className="home-content-img" src={home.bannerImage} alt=""/>
                            <div className="home-caption">
                                <h4>{home.title}</h4>
                                <p>{home.description}</p>
                            </div>
                        </div>
                    </div>
            )}) }
          </Slider>
        </div>
        </div>
      );
}

export default Homecontentslider;