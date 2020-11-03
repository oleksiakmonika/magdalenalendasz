import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Emotion = () => {

    return (
        <div className='subsite'><Header/> <div className='sub'>
            <h2>Emocje</h2>
            <p className='subsiteP space'>Nie ma złych emocji:

                    <li className='subsiteP'>strach włącza się ostrożność
                    </li>
                    <li className='subsiteP'>smutek przynosi refleksję
                    </li>
                    <li className='subsiteP'>wyrzuty sumienia zaszczepiają poczucie sprawiedliwości
                    </li>
                    <li className='subsiteP'>złość buduje granice
                    </li>
                    <li className='subsiteP space'>zazdrość ujawnia marzenia
                    </li>

                Nie ma złych emocji, każde z nich wnoszą coś innego, spełniają różne funkcje, są pożyteczne,
                    wspołistnieją i dopełniają się. Dlatego warto je zrozumieć, zawrzeć z nimi rozejm
                    i pracować nad ich równowagą.
            </p></div>
            <Footer/></div>
)
};
export default Emotion;