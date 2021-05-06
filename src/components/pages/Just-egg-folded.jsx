import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import Data from './Data';
import {Button, Accordion, Card} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import Conhome from './Conhome';
import Productdetail from '../com/Productdetail';
import Banner from '../com/Banner';
import { IconContext } from 'react-icons'

function Justegg(){

    return(
        <>
        <Banner image="https://www.ju.st/sites/default/files/hero/ToasterHero_1.jpg" imagetwo="https://www.ju.st/sites/default/files/hero/mobile/ToasterHero-Mob.jpg" />
        <div className="container">
            

            <Data dis="We created JUST Egg Folded with your breakfast ritual in mind. It's toaster-ready, packed with 7g of clean, sustainable protein, and free of cholesterol. Tastes great on its own with a dash of hot sauce, or tucked into your breakfast sandwiches. Or chop it up for topping noodles and stir-fries." />
            <ImIcons.ImQuotesLeft />
            <h1>Best New Frozen Product</h1><h1> at Expo West’s NEXTY</h1> <h1>Awards 2020</h1>

            <Data dis="Folding eggs is a culinary technique that most cooks know how to do, but few can master. So we bring you perfect fold every time in a convenient, pre-cooked patty.  You can heat it in a toaster, microwave, oven or skillet, but our chefs swear by a classic pop-up toaster. Look for JUST Egg Folded in the frozen aisle." />


            <Conhome title="Eggs Florentine >" image="https://www.ju.st/sites/default/files/hero/Egg_Recipe_Florentine_main.jpg" dis="See Recipe" />
        </div>

        <Productdetail title="Toaster-ready" dis="Simply pop it in a toaster, microwave, oven or skillet, a better breakfast has never been easier. Made entirely from plants, JUST Egg Folded is free of cholesterol and uses less water and carbon emissions than conventional eggs." subtitle="Key ingredients" inimg="https://www.ju.st/sites/default/files/inline-images/mungbean_1.png" inimg1="https://www.ju.st/sites/default/files/inline-images/tumeric_0.png"  pname="Mung bean" pname1="Turmeric" pdis="Sustainable protein" pdis1="Natural golden color" mainimg="https://www.ju.st/sites/default/files/inline-images/JUSTEgg_Folded_v2.png" />
        </>
    );

}

export default Justegg;