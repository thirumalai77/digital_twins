import React,{useState} from 'react';
import {Button, Carousel} from 'react-bootstrap';
import sliderImageOne from '../../assets/images/HomeSlider/Slide_1.jpeg';
import sliderImageTwo from '../../assets/images/HomeSlider/Slide_2.jpeg';
import sliderImageThree from '../../assets/images/HomeSlider/Slide_3.jpeg';
import sliderImageFour from '../../assets/images/HomeSlider/Slide_4.jpeg';
import sliderImageFive from '../../assets/images/HomeSlider/Slide_5.jpeg';
function HomeSlider(){
    const sliderObj = [
        {
            sliderImage:sliderImageOne,
            sliderHeader:'First Slide Label',
            sliderDesc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            sliderImage:sliderImageTwo,
            sliderHeader:'Second Slide Label',
            sliderDesc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            sliderImage:sliderImageThree,
            sliderHeader:'Third Slide Label',
            sliderDesc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            sliderImage:sliderImageFour,
            sliderHeader:'Four Slide Label',
            sliderDesc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            sliderImage:sliderImageFive,
            sliderHeader:'Five Slide Label',
            sliderDesc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
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