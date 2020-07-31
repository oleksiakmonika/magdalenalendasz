import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";
const Psychoteraphy = () => {
    return (
        <div className='subsite'><Header/>
            <h2>psychoterapia</h2>
            <p className='subsiteP'>Każdą terapię zaczynam 3-4 konsultacjami. Wspólnie omawiamy zgłaszany problem, np. czego dotyczy, czym
                się przejawia. Następnie przedstawiam jakie rozwiązanie pomocy psychologicznej dla konkretnej osoby jest
                najlepsze. Czas i forma pracy jest zależna od zgłaszanej problematyki. Może być to terapia
                krótkoterminowa lub długoterminowa.
            </p>
            <p className='subsiteP'> Każde spotkanie indywidualne trwa 50 min. </p><Footer/></div>
    )
}
export default Psychoteraphy;