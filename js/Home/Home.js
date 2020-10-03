import React from "react";
import Header from './Header';
import Footer from './Footer';
import people from
     "../../img/para.jpeg";

const Home = () => {
    return (
        <div id='home'>
        <Header/>
        <div className='containerHome'>
           <img className="photo" src={people}/>
        </div>
            <p className='quotation'>"Czlowiek nigdy nie pozbędzie się tego, o czym milczy"</p>
            <p className='quotation'> Karel Čapek</p>
        <Footer/>
    </div>
    )
}
export default Home;