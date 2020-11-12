import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../img/para.jpg";
import img2 from "../../img/ojciec2.jpg";
import img3 from "../../img/matka.jpg";
import img4 from "../../img/gory.jpg";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (<AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div className='kartka' data-src={img1}></div>
            <div className='kartka' data-src={img2}></div>
            <div className='kartka' data-src={img3}></div>
            <div className='kartka' data-src={img4}></div>
        </AutoplaySlider>
    );
}

// const Slider = ()=>{
//     return(
//     <AwesomeSlider cssModule={AwsSliderStyles}>
{/*<div data-src={img1}/>*/
}
{/*<div data-src={img2} />*/
}
{/*<div data-src={img3} />*/
}
{/*<div data-src={img4} />*/
}
{/*<div data-src={img5} />*/
}
{/*<div data-src={img6} />*/
}
{/*<div data-src={img7} />*/
}
//     </AwesomeSlider>
// );}
export default Slider;