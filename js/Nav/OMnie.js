import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const AboutMe = () => {
    return (
        <div className='subsite'><Header/><div className='sub'><h2>O mnie</h2>
            <p className='subsiteP space right'>Jestem psychologiem i certyfikowaną psychoterapeutką Polskiego Towarzystwa Psychoterapii
                Psychodynamicznej  <a href='http://ptppd.pl/certyfikowani-psychoterapeuci-ptppd/' >(nr certyfikatu 133)</a>. Szkołę z psychoterapii skończyłam w <a href='https://kcp.com.pl/'>Krakowskim Centrum
                    Psychodynamicznym</a>. Prowadzę psychoterapię psychodynamiczną dorosłych.</p>

               <p className='subsiteP space right' > W swojej pracy przyjmuję psychodynamiczny model rozumienia leczenia. Zakłada on, że podczas rozmowy oraz
                w oparciu o relację terapeutyczną istnieje możliwość zmiany i rozwiązania problemów z jakimi zgłasza się
                Pacjent. Uwzględniam znaczenie nieświadomych, wewnętrznych procesów psychicznych, które z czasem stają
                się coraz bardziej wyraźne i zaczynają wyjaśniać skąd biorą się zgłaszane trudności.</p>

                <p className='subsiteP space right' >   Współpracuję z <a href='https://odnowa.gdansk.pl/'>Ośrodkiem Psychoterapii i Rozwoju Osobistego ODNOWA </a>oraz Poradnią Zdrowia Psychicznego
                    ESCULAP.</p>

                <p className='subsiteP space right' >  Należę do <a href='https://ptppd.pl/'>Polskiego Towarzystwa Psychoterapii Psychodynamicznej</a>. Aktualnie jestem w procesie
                certyfikacji <a href='http://www.ptp.org.pl/'>Polskiego Towarzystwa Psychologicznego</a> oraz Polskiego Towarzystwa Psychoterapii
                    Psychodynamicznej.</p>

                <p className='subsiteP space right' >  Każdą swoją pracę poddaję stałemu doskonaleniu poprzez superwizje, zgodnie z wymaganiami Polskiego
                Towarzystwa Psychologicznego.
                </p></div><Footer/></div>
    )
};
export default AboutMe;