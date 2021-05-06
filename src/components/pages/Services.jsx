import React from 'react';

function Services()
{
    let curDate = new Date();
    curDate = curDate.getHours();
    let gatting = '';

    const cssStyle={};

    if(curDate >= 1 && curDate < 12){
        gatting = 'Good Morning';
        cssStyle.color = 'green';
    }else if(curDate >= 12 && curDate < 19){
        gatting = 'Good Afternoon';
        cssStyle.color = 'red';
    }else{
        gatting = 'Good Night';
        cssStyle.color = 'yellow';
    }
    return(
        <h1 style={cssStyle}>{gatting}</h1>
    )
}
export default Services;