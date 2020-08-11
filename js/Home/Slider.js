import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../img/poczatek_1280.jpg";
import img2 from "../../img/droga_1280.jpg";
import img3 from "../../img/luz_1280.jpg";
import img4 from "../../img/ojciec z dzieciem_1280.jpg";
import img5 from "../../img/przyjaciele w podrozy_1280.jpg";
import img6 from "../../img/przyjaciolki_1280.jpg";
import img7 from "../../img/radosne kobiety_1280.jpg";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (<AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div className='kartka' data-src={img1}> ipsum Lorem ipsum Lorem <p
                className='tekst_na_obraze ipsum Lorem_dark'>Lorem ipsum Lorem ipsum </p></div>
            <div className='kartka' data-src={img2}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_dark'></p></div>
            <div className='kartka' data-src={img3}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_white'></p></div>
            <div className='kartka
            _white' data-src={img4}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_dark'></p></div>
            <div className='kartka' data-src={img5}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_white'></p></div>
            <div className='kartka' data-src={img6}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_dark'></p></div>
            <div className='kartka' data-src={img7}>Lorem ipsum Lorem ipsum<p className='tekst_na_obrazek_dark'></p>
            </div>
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