import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import Data from './Data';
import {Button, Accordion, Card} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import Conhome from './Conhome';
import Productdetail from '../com/Productdetail';

import { IconContext } from 'react-icons'

function Justegg(){

    return(
        <>
        <div className="deskview">
        <iframe src="https://player.vimeo.com/video/461199858?background=1&autoplay=1&mute=1&loop=1&color=FDB71B&title=0&controls=0&title=0&byline=0&portrait=0" width="100%" height="575" style={{marginTop:"-50px"}} frameborder="0" allowfullscreen></iframe>
		</div>
		<div className="mobview">
        <img src="https://www.ju.st/sites/default/files/hero/mobile/JE_product_page_hero_M_0.jpg" className="img2" width="100%;" style={{marginTop:"-85px",objectFit: "cover"}} />
        </div>
        <div className="container">
            <div className="con">
                <h1>Made from Plants</h1>
                <a href="" style={{color:"black"}}>Watch More <AiIcons.AiFillPlayCircle /></a>
            </div>

            <Data dis="We reimagined the egg to better align with the idea of starting your day right. Made from plants (not chickens), JUST Egg has zero cholesterol, it's packed with clean, sustainable protein, and it scrambles and tastes just like eggs. How to cook JUST Egg? Like an egg. Simply scramble it in a skillet, no complicated instructions. Plus it works in all your favorite recipes, from frittatas and omelets, to banana bread and pancakes." />
            <ImIcons.ImQuotesLeft />
            <h1>It’s not every day you get</h1><h1> to see something that</h1> <h1> blows your mind.</h1>
            <p>José Andrés, award-winning chef and one of TIME’s 100 most influential people</p>

            <Data dis="JUST Egg's foundational ingredient? A protein-rich legume called a mung bean that magically scrambles like an egg. The mung bean has been in the food system for over 4,000 years and is used in countless cuisines globally, but it's never before been used quite like this. We were lucky enough to find something that has already impacted our food system for thousands of years and turn it into a meal that will impact it for thousands more." />


            <Conhome title="Omelet >" image="https://www.ju.st/sites/default/files/hero/JustEgg_Layer-1-comp.jpg" dis="See Recipe" />
        </div>

        <Productdetail title="Fluffy & filling."
         dis="Great for omelets, but also delicious in French toast. JUST Egg is made entirely from plants, it's packed with clean, sustainable protein, and it scrambles and tastes like eggs."
        subtitle="Key ingredients"
         inimg="https://www.ju.st/sites/default/files/inline-images/mungbean_1.png"
          inimg1="https://www.ju.st/sites/default/files/inline-images/tumeric_0.png"
        pname="Mung bean"
         pname1="Turmeric"
          pdis="Sustainable protein"
           pdis1="Natural golden color"
            mainimg="https://www.ju.st/sites/default/files/product_keys/JUSTEggv3_0.png " />
        </>
    );

}

export default Justegg;