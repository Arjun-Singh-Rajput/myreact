import React from 'react';

function Conhome(props){
    return(
        <div class="row" style={{marginTop:"100px"}}>
            
                <img src={props.image} className="img" width="100%" />
                <div class="col-sm-12" style={{paddingTop:'20px'}}>
                <h3>{props.title}</h3>
                </div>
                <div class="col-sm-6">
                <p>{props.dis}</p>
                </div>
        </div>
    );

}

export default Conhome;