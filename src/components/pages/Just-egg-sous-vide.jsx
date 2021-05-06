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
        <Banner image="https://www.ju.st/sites/default/files/stories/hero/SV_hoven_01.jpg" imagetwo="https://www.ju.st/sites/default/files/hero/mobile/JESV_hoven_mob_01_0.jpg" />
        <div className="container">
            

            <Data dis="JUST Egg Sous Vide is a delicious, protein-rich breakfast bite prepared in the sous vide style. Sous vide (say soo-veed) is a cooking method in which food is sealed and slow-cooked in water at precise temperatures. This produces a perfectly cooked egg bite that is incredibly tender and rich, yet light. Find JUST Egg Sous Vide in the freezer aisle at select retailers in Spring 2021." />
            <ImIcons.ImQuotesLeft />
            <h1>Your innovations are</h1><h1> changing the world.</h1>
            <h4>John Mackey, CEO of Whole Foods Market</h4>

            <Data dis="We make JUST Egg Sous Vide in four unique flavors inspired by global cuisines and whole plant ingredients – like the classically American combination of potato and herbs, or the rich umami balance of mushroom and soy sauce perfected in Japanese cooking. Each delicious bite is made with our plant-based JUST Egg, then textured and flavored with whole vegetables, herbs and spices. JUST Egg Sous Vide bites come fully cooked and ready to be heated up in a conventional oven, toaster oven or microwave. " />


            
        </div>

        <Productdetail title="Inspired by America" dis="A classic American combination of potato and fresh herbs. Each satisfying bite contains chunks of hearty red potato and sweet red bell pepper. This JUST Egg Sous Vide bite is finished with fragrant dill, snappy chives and cracked black pepper." subtitle="Key ingredients" inimg="https://www.ju.st/sites/default/files/inline-images/roastedpotatos.png" inimg1="https://www.ju.st/sites/default/files/inline-images/redbellpepper.png"  pname="Roasted Potato" pname1="Red Bell Pepper"  mainimg="https://www.ju.st/sites/default/files/inline-images/JUSTEgg_SV_v1_0.png" />
        </>
    );

}

export default Justegg;