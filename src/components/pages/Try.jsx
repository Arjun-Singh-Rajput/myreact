import React from 'react';

function add(a,b){
    let sum = a + b;
    return sum;
}

function sub(a,b){
    let sum = a - b;
    return sum;
}

function div(a,b){
    let sum = a / b;
    return sum;
}

export default add;

export {sub , div};