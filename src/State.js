import React from 'react';
import './App.css';
import Info from "./Info"
import img1 from "./daniell.jpg"
import img2 from "./sarra.jpg"
class State extends React.Component {
   
state ={
   info:{name: "",img : {img1},para : ' '}
}
   render (){
     
     const infooo={
        akrem : {name: "akrem",img : img1,para : 'azertyuiop^sdfghjklm'},
        sarra : {name: "sarra",img : img2,para : 'azertyuiop^sdfghjklm'}
     }
       return (
           <div>
        <button onClick={() => this.setState({info :infooo.sarra})}>
        sarra 
      </button>
              <button onClick={() =>this.setState({info :infooo.akrem})}>
            akrem
            </button>
      <Info information={this.state.info}/>
            </div>
       
       )
   }
  
}
export default State