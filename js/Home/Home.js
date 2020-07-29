import React from "react";
import Header from './Header';
import Footer from './Footer';
import people from
     "../../img/86eb8aa8-20a6-469e-852f-758160a351f0.jpg";

const Home = () => {
    return (
        <div id='home'>
        <Header/>
        <div className='containerHome'>
            <img className="photo" src={people}/>
        <p>Żeby wyleczyć trzeba porozmawiać</p>
        </div>
        <Footer/>
    </div>
    )
}
export default Home;