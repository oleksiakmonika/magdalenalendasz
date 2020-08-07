import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import img1 from
        "../../img/poczatek_1280.jpg";

import img2 from
        "../../img/droga_1280.jpg";
import img3 from
        "../../img/luz_1280.jpg";
import img4 from
        "../../img/ojciec z dzieciem_1280.jpg";
import img5 from
        "../../img/przyjaciele w podrozy_1280.jpg";
import img6 from
        "../../img/przyjaciolki_1280.jpg";
import img7 from
        "../../img/radosne kobiety_1280.jpg";
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';


const Slider = ()=>{
    return(
    <AwesomeSlider cssModule={AwsSliderStyles}>
        <div data-src={img1}/>
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
        <div data-src={img5} />
        <div data-src={img6} />
        <div data-src={img7} />
    </AwesomeSlider>
);}
export default Slider;