import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const AboutMe = () => {
    return (
        <div className='subsite'><Header/><h2>o mnie</h2>
            <p className='subsiteP'>Jestem psychologiem i certyfikowaną psychoterapeutką Polskiego Towarzystwa Psychoterapii
                Psychodynamicznej (nr certyfikatu 133). Szkołę z psychoterapii skończyłam w Krakowskim Centrum
                Psychodynamicznym. Prowadzę psychoterapię psychodynamiczną dorosłych.

                W swojej pracy przyjmuję psychodynamiczny model rozumienia leczenia. Zakłada on, że podczas rozmowy oraz
                w oparciu o relację terapeutyczną istnieje możliwość zmiany i rozwiązania problemów z jakimi zgłasza się
                Pacjent. Uwzględniam znaczenie nieświadomych, wewnętrznych procesów psychicznych, które z czasem stają
                się coraz bardziej wyraźne i zaczynają wyjaśniać skąd biorą się zgłaszane trudności.

                Współpracuję z Ośrodkiem Psychoterapii i Rozwoju Osobistego ODNOWA oraz Poradnią Zdrowia Psychicznego
                ESCULAP.

                Należę do Polskiego Towarzystwa Psychoterapii Psychodynamicznej. Aktualnie jestem w procesie
                certyfikacji Polskiego Towarzystwa Psychologicznego oraz Polskiego Towarzystwa Psychoterapii
                Psychodynamicznej.

                Każdą swoją pracę poddaję stałemu doskonaleniu poprzez superwizje, zgodnie z wymaganiami Polskiego
                Towarzystwa Psychologicznego.
            </p><Footer/></div>
    )
};
export default AboutMe;