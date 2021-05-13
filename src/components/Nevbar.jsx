import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link, NavLink} from 'react-router-dom';
import  { SidebarData } from './SidebarData';
import './Navebar.css';
import { IconContext } from 'react-icons'

function Nevbar()
{
  const [sidebar,setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [navbar,setNavbar] = useState(false);

  const changeBackgraund = () => {
    if(window.scrollY >= 50){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  //const style = { color: "black", fontSize: "1.5em" }
  window.addEventListener('scroll', changeBackgraund);
    return(
      <>
     
      <IconContext.Provider value={{ color: '#fff'}}>
      <div className={navbar ? 'navbar active' : 'navbar navbar-fixed-top'}>
      <div className="container">
      <Link to='#' style={{color:"black"}} >Logo</Link>
        <Link to='#' className='menu-bars' >
            <FaIcons.FaBars onClick={showSidebar}  />
        </Link>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-manu-items' onClick={showSidebar}>
              <li class="navbar-toggle">
                  <Link to='#' className='menu-bars' style={{color : "black"}}>
                    <AiIcons.AiOutlineClose />
                  </Link>
              </li>
              {SidebarData.map((item, index) => {
                return(
                  <li key={index} class={item.cName}>
                    <Link to={item.path} >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
      </nav>
      </IconContext.Provider>
      
      </>
    )
}



export default Nevbar;