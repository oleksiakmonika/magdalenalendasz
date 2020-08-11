import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";

const Treatment = () => {

    return (
        <div className='subsite'>
            <Header/>
            <div className='sub'>
            <h2>Leczenie</h2>
            <div className='subsiteP space'>Zajmuję się leczeniem zarówno chorób, jak i zaburzeń psychicznych. Często są to różnego rodzaju
                nerwice, w tym stany lękowe, depresje/zaburzenia nastroju, zaburzenia osobowości,zaburzenia
                psychosomatyczne (które przejawiają się objawami medycznymi, ale wyniki lekarskie nie wskazują na jakąś
                konkretną przyczynę medyczną).
            </div>
            <div className='subsiteP space'>Zgłaszają się też osoby, które przestały radzić sobie z emocjami (są
                zbyt porywcze albo za bardzo nieśmiałe), którym nie układają się relacje osobiste i zawodowe, które
                często się kłócą albo takie, które opisują siebie jako DDA. Pracuję także z osobami, które
                zastanawiają się nad swoją tożsamością.
            </div>
            <div className='subsiteP space'>Najczęściej jednak Pacjent nie wie co mu jest. Chciałby się dowiedzieć i po
                prostu z tego wyjść.
            </div>

            </div><Footer/>
        </div>)
};
export default Treatment;