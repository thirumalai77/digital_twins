import React,{useState} from 'react';
import HomeSlider from '../Home/HomeSlider';
import ContentIcon from '../Home/ContentIcon';
import BackgroundImageText from '../Home/BackgroundImageText';
import Homecontentslider from '../Home/Homecontentslider';
function Home(){
    return(
        <>
        <HomeSlider />
        <ContentIcon />
        <BackgroundImageText />
        <Homecontentslider />
        </>
    )
}
export default Home;