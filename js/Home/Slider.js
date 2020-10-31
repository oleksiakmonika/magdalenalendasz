import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../img/landscape-4313085_1280.jpg";
// import img2 from "../../img/droga_1280.jpg";
import img3 from "../../img/luz_1280.jpg";
import img4 from "../../img/ojciec z dzieciem_1280.jpg";
import img5 from "../../img/przyjaciele w podrozy_1280.jpg";
import img6 from "../../img/przyjaciolki_1280.jpg";
// import img7 from "../../img/radosne kobiety_1280.jpg";
import img8 from "../../img/mostek kadr.jpg";
import img9 from "../../img/pokolenia2.jpg";
import img10 from "../../img/para.jpg";
// import img11 from "../../img/dziwczynki.jpg";
import img12 from "../../img/mountains-5606808_1280.jpg";
import img13 from "../../img/park kadr.jpg";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (<AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div className='kartka' data-src={img8}></div>
            {/*<div className='kartka' data-src={img2}><p className='tekst_na_obrazek_dark'>Samemu jest dużo trudniej...</p></div>*/}
            <div className='kartka' data-src={img3}> <p className='tekst_na_obrazek_dark'>Znowu jestem w stanie śmiać się i rozmawiać.</p></div>
            <div className='kartka' data-src={img9}><p className='tekst_na_obrazek_white'></p></div>
            <div className='kartka' data-src={img10}><p className='tekst_na_obrazek_dark'></p>
            </div>
            <div className='kartka
            _white' data-src={img4}><p className='tekst_na_obrazek_dark'>Nie mogę zmienić swojej przeszłości, ale mogę zmienić siebie.</p></div>
            <div className='kartka' data-src={img5}><p className='tekst_na_obrazek_white'></p></div>
            <div className='kartka' data-src={img6}><p className='tekst_na_obrazek_dark'></p></div>



            <div className='kartka' data-src={img1}><p className='tekst_na_obrazek_dark'></p></div>
            <div className='kartka' data-src={img12}><p className='tekst_na_obrazek_dark'></p></div>
            <div className='kartka' data-src={img13}><p className='tekst_na_obrazek_dark'></p>
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