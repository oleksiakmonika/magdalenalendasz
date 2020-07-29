import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>Magdalena Lendasz</h1>
            <p className='occupation'>psycholog, psychoterapeuta</p>
            <div className='div'>
                <ul className='nav'>
                    <li><Link to='/' className='link'>Strona główna</Link></li>
                    <li><Link to='/leczenie' className='link'>Leczenie</Link></li>
                    <li><Link to='/psychoterapia' className='link'>Psychoterapia</Link></li>
                    <li><Link to='/omnie' className='link'>O mnie</Link></li>
                    <li><Link to='/kontakt' className='link'>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    )
};
export default Header;