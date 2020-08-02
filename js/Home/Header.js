import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    const [navOpened, setNavOpened] = useState(false);
    const [bOpened, setBOpened] = useState(false);
    const navClassNames = navOpened ? 'navigation' : 'navigation--active';
    const bClassNames = bOpened ? 'hamburger' : 'hamburger--active';
    return (
        <div className='header'>
            <h1>Magdalena Lendasz</h1>
            <p className='occupation'>psycholog, psychoterapeuta</p>
            <div className='divDesktop'>
                <ul className='nav'>
                    <li><Link to='/' className='link'>Strona główna</Link></li>
                    <li><Link to='/leczenie' className='link'>Leczenie</Link></li>
                    <li><Link to='/psychoterapia' className='link'>Psychoterapia</Link></li>
                    <li><Link to='/omnie' className='link'>O mnie</Link></li>
                    <li><Link to='/kontakt' className='link'>Kontakt</Link></li>
                </ul>
            </div>
            <div className="divMobile">
                <div
                    className={bClassNames}
                    onClick={() =>{
                        setNavOpened(!navOpened);
                        setBOpened(!bOpened)
                    }}
                >
                        <span className="hamburger__box">
               <span className="hamburger__inner"></span>
            </span>
                </div>
                <nav >
                    <ul className={navClassNames}>
                        <li className='navigation__item'><Link to='/' className='link'>Strona główna</Link></li>
                        <li className='navigation__item'><Link to='/leczenie' className='link'>Leczenie</Link></li>
                        <li className='navigation__item'><Link to='/psychoterapia' className='link'>Psychoterapia</Link>
                        </li>
                        <li className='navigation__item'><Link to='/omnie' className='link'>O mnie</Link></li>
                        <li className='navigation__item'><Link to='/kontakt' className='link'>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};
export default Header;