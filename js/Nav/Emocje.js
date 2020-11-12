import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Emotion = () => {

    return (
        <div className='subsite'><Header/> <div className='sub'>
            <h2 className='subsiteH'>Emocje</h2>
            <p className='subsiteP space'>Nie ma złych emocji:

                    <p className='subsiteP1'> - strach włącza ostrożność
                    </p>
                    <p className='subsiteP1'> - smutek przynosi refleksję
                    </p>
                    <p className='subsiteP1'> - wyrzuty sumienia zaszczepiają poczucie sprawiedliwości
                    </p>
                    <p className='subsiteP1'> - złość buduje granice
                    </p>
                    <p className='subsiteP1 space'> - zazdrość ujawnia marzenia
                    </p>

                Nie ma złych emocji, każde z nich wnoszą coś innego, spełniają różne funkcje, są pożyteczne,
                    wspołistnieją i dopełniają się. Dlatego warto je zrozumieć, zawrzeć z nimi rozejm
                    i pracować nad ich równowagą.
            </p></div>
            <Footer/></div>
)
};
export default Emotion;