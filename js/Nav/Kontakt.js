import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Contact = () => {
    return (
        <div className='subsite'>
            <Header/>
            <div className='sub'>
                <h2>Kontakt</h2>
                <div className='contact'>
                    <div>
                        <p className='subsiteP right space italic'>Termin pierwszego spotkania ustala się telefonicznie lub
                            poprzez
                            e-mail:</p>
                        <p className='subsiteP bold space'>tel.: 503 11
                            33 24</p>
                        <p className='subsiteP  space'>e-mail: psycholog@magdalenalendasz.pl</p>

                        <span className='subsiteP bold'>Gdańsk Śródmieście</span> <span className='subsiteN subsiteP '>(okolice Dw. Głównego)</span>
                        <p className='space'><span className='subsiteP bold'>ul. Dyrekcyjna 6 </span><span
                            className='subsiteN '>, p. nr 209 (II piętro)</span></p></div>
                    <div className='margin'>
                        {/*<p className='subsiteP space'>Mapka: </p>*/}
                        <iframe id="inlineFrameExample" className='subsiteP'
                                title="Inline Frame Example"
                                width="300"
                                height="220"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.833396414816!2d18.64305731583716!3d54.3599249802039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7370eba5b199%3A0x86e3edc15f3d0530!2sDyrekcyjna%206%2C%2080-852%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1596040429128!5m2!1spl!2spl">
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
export default Contact;