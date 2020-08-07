import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Emotion = () => {

    return (
        <div className='subsite'><Header/>
            <h2>emocje</h2>
            <p className='subsiteP'>Nie ma złych emocji:

                    <li className='subsiteP'>kiedy odczuwasz strach, włącza Ci się ostrozność
                    </li>
                    <li className='subsiteP'>smutek przynosi reflekcje
                    </li>
                    <li className='subsiteP'>wyrzuty sumienia zaszczepiają poczucie sprawiedliwości
                    </li>
                    <li className='subsiteP'>złość buduje granice
                    </li>
                    <li className='subsiteP'>zazdrość ujawnia marzenia
                    </li>

                Nie ma złych emocji. Bo każde z nich wnoszą coś innego, spełniają różne funkcje, są porzyteczne,
                    wspołistnija i dopełniaja się. Dlatego warto je zrozumieć, zawrzeć z nimi rozejm
                    i pracować nad ich równowagą.
            </p>
            <Footer/></div>
)
};
export default Emotion;