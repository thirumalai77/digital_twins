import React,{useState} from 'react';
import {Button, Carousel} from 'react-bootstrap';
import sliderImageOne from '../../assets/images/HomeSlider/Slide_1.jpeg';
import sliderImageTwo from '../../assets/images/HomeSlider/Slide_2.jpeg';
import sliderImageThree from '../../assets/images/HomeSlider/Slide_3.jpeg';
import sliderImageFour from '../../assets/images/HomeSlider/Slide_4.jpeg';
import sliderImageFive from '../../assets/images/HomeSlider/Slide_5.jpg';
function HomeSlider(){
    const sliderObj = [
        {
            sliderImage:sliderImageOne,
            sliderHeader:'MEP Coordination and BOQ',
            sliderDesc: ''
        },
        {
            sliderImage:sliderImageTwo,
            sliderHeader:'Facade Models',
            sliderDesc: ''
        },
        {
            sliderImage:sliderImageThree,
            sliderHeader:'MEP Models',
            sliderDesc: ''
        },
        {
            sliderImage:sliderImageFour,
            sliderHeader:'Structure Models',
            sliderDesc: ''
        },
        {
            sliderImage:sliderImageFive,
            sliderHeader:'Architecture Models',
            sliderDesc: ''
        }
    ]
    return(
        <Carousel pause={false}>
            {sliderObj.map((sliObj)=>{
                return(
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider-image"
                        src={sliObj.sliderImage}
                        alt="First slide"
                        />
                        <Carousel.Caption className='carousel-label'>
                            <h3>{sliObj.sliderHeader}</h3>
                            <p>{sliObj.sliderDesc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
             })
            }
        </Carousel>
    )
}

export default HomeSlider;