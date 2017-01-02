import HelloWorld from './hello-world';
import Reactbabylonjs from './react-babylonjs';
import React from 'react';
import ReactDOM from 'react-dom';
//require('./babylon.min.js');

//just testing not be place here
document.body.style.overflow = 'hidden';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.margin = 0;
document.body.style.padding = 0;

ReactDOM.render(
    <Reactbabylonjs/>,
    document.querySelector('.root')
);
