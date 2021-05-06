import React from 'react';
import Data from './Data';
import Banner from '../com/Banner';
import Conhome from './Conhome';
function Home()
{
    
    const img1 = "https://www.ju.st/sites/default/files/fullbleed/beanstoplate_dsk_v3.jpg"
   
    const fname = "Arjun";
    const lname = "singh";
    return(
        <>
        <Banner image="https://www.ju.st/sites/default/files/stories/hero/products%20hero_DSK.jpg" imagetwo="https://www.ju.st/sites/default/files/hero/mobile/NEW_hero_mobile_newv2.jpg" />
        <div className="container">
            
            
                <Data dis="We believe in seeing the world differently. The egg is the world’s most eaten animal protein, so we reimagined it. Because when we realize a plant is an egg, we eat healthier, our planet becomes healthier, and our breakfast rituals take on even more meaning.

It starts with a small bean and some healthy soil. Then, the bean becomes an egg that scrambles in a pan or folds into an omelet. It leaves wild spaces wild, reduces air and ocean pollution, and builds muscle in our bodies without a milligram of cholesterol." />
                

            
        </div>
        <div><img src={img1} className="img" width="100%" /></div>

        <div className="container">
            <Data title="Made from plants" dis="It took us 5 years to find it, but we found a plant that magically scrambles like an egg. It's a protein-rich legume called the mung bean. Mung beans have been in the global food system for thousands of years, but they've never been used quite like this. When you pour JUST Egg in a skillet, the gentle sizzle as it hits the pan and the way it cooks into a fluffy, chewy breakfast scramble will exceed all your expectations." />
            <Data title="A better egg" dis="For you and for the planet. JUST Egg has zero cholesterol and less saturated fat than conventional eggs, with a similar amount of protein. Its ingredients require less land, water and carbon emissions to make; in fact it’s one of the most sustainable protein sources available. To both preserve our planet and provide nutritious food for everyone for generations to come, we're rethinking the food we eat and how we make it." />
        
         <Conhome title="JUST Egg" image="https://www.ju.st/sites/default/files/2021-02/JUST_Egg_thumb2.jpg" dis="The world’s simplest and most transformational food, reimagined with plants. Great for omelets, but also delicious in French toast. " />
         <Conhome title="JUST Egg Folded" image="https://www.ju.st/sites/default/files/2021-01/JUST_Egg_folded_thumb3.jpg" dis="Think easy: simply heat it up in a toaster, microwave, oven or skillet. Ideal for filling breakfast sandwiches or topping noodles. " />

         <Conhome title="JUST Egg Sous Vide" image="https://www.ju.st/sites/default/files/2021-01/JUST_Egg_SV_thumb1.jpg" dis="Prepared with the sous vide method, for a perfectly cooked egg bite that is incredibly tender and rich, yet light." />
        </div>
        </>
    )
}

export default Home;