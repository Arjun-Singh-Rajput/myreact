import React from 'react';
import Footerlink from './Footerlink';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Sdata from './pages/Sdata';
import {Link, NavLink} from 'react-router-dom';
import { IconContext } from 'react-icons'

function ndata(val){
    return(
        <Footerlink title={Sdata[0].title}
                 sub={val.sub}
                 sub1={val.sub1}
                 sub2={val.sub2}
                 sub3={val.sub3} />
    );

}

function Footer()
{

    return(
        <>
        <footer class="footer">
            <div className="container bottom_border">
                <div className="row">
                    
                

                 { Sdata.map(ndata) } 
            
                    
            </div>
            </div>


<div className="container">
<ul className="foote_bottom_ul_amrc">
<li><a href="http://webenlance.com">GOOD Meat</a></li>
<li><a href="http://webenlance.com">Canada</a></li>
<li><a href="http://webenlance.com">Terms of Use</a></li>
<li><a href="http://webenlance.com">Privacy Policy</a></li>

</ul>



<ul className="social_footer_ul">
<li><Link to='#'><FaIcons.FaFacebookF  /></Link></li>       
<li><Link to='#'><FaIcons.FaTwitter  /></Link></li>
<li><Link to='#'><FaIcons.FaLinkedinIn  /></Link></li>
<li><Link to='#'><FaIcons.FaInstagram  /></Link></li>
</ul>

</div>

</footer>



        </>
    );
}

export default Footer;