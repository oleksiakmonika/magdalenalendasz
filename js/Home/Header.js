import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>Magdalena Lendasz</h1>
            <p>psycholog, psychoterapeuta</p>
            <div className='div'>
                <ul className='nav'>
                    <li><Link to='/'>Strona główna</Link></li>
                    <li><Link to='/leczenie'>Leczenie</Link></li>
                    <li><Link to='/psychoterapia'>Psychoterapia</Link></li>
                    <li><Link to='/omnie'>O mnie</Link></li>
                    <li><Link to='/kontakt'>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    )
};
export default Header;