import React from 'react';
import add, {sub , div} from './Try';

function About()
{
    return(
        <div className="container" >
            <h3 style={{paddingTop:'100px'}}>Add Some Number { add(6, 5) }</h3>
            <h3 style={{paddingTop:'100px'}}>Sum Some Number { sub(6, 10) }</h3>
            <h3 style={{paddingTop:'100px'}}>Div Some Number { div(6, 8) }</h3>
        </div>

    )
}

export default About;