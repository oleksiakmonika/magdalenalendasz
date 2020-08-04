import React from "react";
import Header from './Header';
import Footer from './Footer';
import people from
     "../../img/beach-3226488_640.jpg";

const Home = () => {
    return (
        <div id='home'>
        <Header/>
        <div className='containerHome'>
            <img className="photo" src={people}/>
            <h2 className='home'>Żeby wyleczyć trzeba porozmawiać</h2>
        </div>
        <Footer/>
    </div>
    )
}
export default Home;