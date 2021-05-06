import React from 'react';

function Data(props){
    return(
        <>
    <div className="row">
        <div className="col-sm-6">
            <h1>{props.title}</h1>
            <p style={{textAlign:'justify'}}>{props.dis}</p>
        </div>
    </div>
            </>
    );
}

export default Data;