import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    const [navOpened, setNavOpened] = useState(false);
    const [bOpened, setBOpened] = useState(false);
    const [linksOpened, setLinksOpened] = useState(false);
    const navClassNames = navOpened ? 'navigation--active' : 'navigation';
    const bClassNames = bOpened ? 'hamburger--active' : 'hamburger ';
    const linksClassNames =linksOpened ? 'navigation' : 'navigation--active';
    return (
        <div className='header'>
            <h1>Magdalena Lendasz</h1>
            <p className='occupation'>psycholog, psychoterapeuta</p>
            <p className='quotation'>Gdy słucham co mówisz, słyszę kim jesteś</p>
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
                <nav>
                    <ul className={navClassNames} onClick={() =>{
                        setLinksOpened(!linksOpened)}} >
                        <li className={linksClassNames} className='navigation__item'><Link to='/' className='link'  >Strona główna</Link></li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/leczenie' className='link'>Leczenie</Link></li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/psychoterapia' className='link'>Psychoterapia</Link>
                        </li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/omnie' className='link'>O mnie</Link></li>
                        <li className={linksClassNames} className='navigation__item'><Link to='/kontakt' className='link'>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};
export default Header;