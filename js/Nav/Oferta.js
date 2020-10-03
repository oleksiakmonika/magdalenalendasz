import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";
import energy from "../../img/enargia.jpeg";

const Offer = () => {
    return (
        <div className='subsite'><Header/>
            <div className='sub'>
                <h2>Oferta</h2>
                <div className='contact space '>
                    <div><p className='subsiteP space spaceRight '>Psychoterapia psychodynamiczna to metoda leczenia oparta w dużej
                        mierze na dynamice relacji między pacjentem a terapeutą. Podstawą teoretyczną jest
                        psychoanaliza. Zmiana możliwa jest dzięki zintegrowaniu wiedzy i doświadczenia. Czasem myśli są
                        straszniejsze niż rzeczywistość.</p>
                    <p className='subsiteP space spaceRight'> Przyjdź i sprawdź. Koszt pierwszej konsultacji 110 zł.</p></div>
                  <div >  <img  id="offerPhoto" src={energy}/></div>

                </div>
            </div>
            <Footer/></div>
    )
}
export default Offer;