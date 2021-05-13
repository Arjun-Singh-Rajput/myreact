import { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Nevbar from './components/Nevbar';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Footer from './components/Footer';
import Justegg from './components/pages/Justegg';
import Justfolded from './components/pages/Just-egg-folded';
import Justvide from './components/pages/Just-egg-sous-vide';

import ClipLoader from "react-spinners/ClipLoader";



function App(){
    
    return(
        <>
        
        <Router>
            <div>
            <Nevbar />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/justegg" component={Justegg} />
                <Route exact path="/Justfolded" component={Justfolded} />
                <Route exact path="/Justvide" component={Justvide} />
                <Route component={Notfound} />
            </Switch>
                
                <Footer />
            </div>
        </Router>
        </>
    );
}
export default App;