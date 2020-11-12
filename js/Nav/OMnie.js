import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const AboutMe = () => {
    return (
        <div className='subsite'><Header/><div className='sub'><h2 className='subsiteH'>O mnie</h2>
            <div className='subsiteP space right'>Jestem psychologiem i certyfikowaną psychoterapeutką Polskiego Towarzystwa Psychoterapii
                Psychodynamicznej  <a href='http://ptppd.pl/certyfikowani-psychoterapeuci-ptppd/' >(nr certyfikatu 133)</a>. Szkołę z psychoterapii skończyłam w <a href='https://kcp.com.pl/'>Krakowskim Centrum
                    Psychodynamicznym</a>.</div>

               <div className='subsiteP space right' > W swojej pracy przyjmuję psychodynamiczny model rozumienia leczenia. Zakłada on, że podczas rozmowy oraz
                w oparciu o relację terapeutyczną istnieje możliwość zmiany i rozwiązania problemów z jakimi zgłasza się
                Pacjent. Uwzględniam znaczenie nieświadomych, wewnętrznych procesów psychicznych, które z czasem stają
                się coraz bardziej wyraźne i zaczynają wyjaśniać skąd biorą się zgłaszane trudności.</div>
            <div className='subsiteP space right' >  Należę do <a href='https://ptppd.pl/'>Polskiego Towarzystwa Psychoterapii Psychodynamicznej</a>. Każdą swoją pracę poddaję stałemu doskonaleniu poprzez superwizje, zgodnie z wymaganiami Polskiego
                Towarzystwa Psychologicznego.</div>
            <div className='subsiteK1 space right' >   Współpracuję z <a href='https://odnowa.gdansk.pl/'>Ośrodkiem Psychoterapii i Rozwoju Osobistego ODNOWA </a>oraz lekarzami: </div><div className='subsiteK'>Małgorzatą Szeliga - tel. 537 222 266 </div><div className='subsiteK space'>Piotrem Nowotka - tel. 609 394 600</div>



                </div><Footer/></div>
    )
};
export default AboutMe;