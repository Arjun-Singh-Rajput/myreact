import React from 'react'
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'just-egg',
        path: '/justegg',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },

    {
        title: 'JUST Egg Folded',
        path: '/Justfolded',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {
        title: 'JUST Egg Sous Vide',
        path: '/Justvide',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },

    
]
