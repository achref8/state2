import React from 'react';

import './App.css';



function Info(props) {
  return (
    <div className="App">
 
       <div ><h2>{props.information.name} </h2></div>
       <img src={props.information.img}/> 
       <p>{props.information.para} </p>
    </div>
  );
}

export default Info;