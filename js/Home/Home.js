import React from "react";
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
// import people from
//      "../../img/beach-3226488_640.jpg";

const Home = () => {
    return (
        <div id='home'>
        <Header/>

        <div className='containerHome'>
            {/*<h2 className='home'>Gdy slucham co mowisz, slysze kim jestes</h2> /!*<img className="photo" src={people}/>*!/*/}
            <Slider/>
        </div>
        <Footer/>
    </div>
    )
}
export default Home;