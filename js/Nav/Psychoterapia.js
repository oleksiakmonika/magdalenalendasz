import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Psychoteraphy = () => {
    return (
        <div className=''><Header/>
            <div className='sub'>
                <h2>Psychoterapia</h2>
                <p className='subsiteP space'>Każdą terapię zaczynam 3-4 konsultacjami. Wspólnie omawiamy zgłaszany problem,
                    np. czego dotyczy, czym
                    się przejawia. Następnie przedstawiam jakie rozwiązanie pomocy psychologicznej dla konkretnej osoby
                    jest
                    najlepsze. Czas i forma pracy jest zależna od zgłaszanej problematyki.</p>
                <p className='subsiteP space'> Może być to terapia
                    krótkoterminowa lub długoterminowa.
                </p>
                <p className='subsiteP space'> Każde spotkanie indywidualne trwa 50 min. </p></div>
            <Footer/></div>
    )
}
export default Psychoteraphy;