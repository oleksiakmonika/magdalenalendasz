import React from "react";
import ReactDOM from "react-dom";
import Home from './Home/Home';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Nav/Kontakt';
import NotFound from "./Nav/NotFound";
import Treatment from "./Nav/Leczenie";
import Emotion from "./Nav/emocje";
import Story from "./Nav/bajka";
import AboutMe from "./Nav/OMnie";
import Psychoteraphy from "./Nav/Psychoterapia";


require('../scss/main.scss');

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/kontakt" component={Contact}/>
                    <Route path="/leczenie" component={Treatment}/>
                    <Route path="/emocje" component={Emotion}/>
                    <Route path="/bajka" component={Story}/>
                    <Route path="/omnie" component={AboutMe}/>
                    <Route path="/psychoterapia" component={Psychoteraphy}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("app"));

