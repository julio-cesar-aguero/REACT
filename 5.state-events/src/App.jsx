import React, { Component } from "react";

class App extends Component {
  suma = () =>{
    <p>SUMAR</p>
  } 
  render () {
    return (
      <>
      <h1>
        Michi         
      </h1>
      <button onClick={this.suma()}>actualizar</button>
      </>
    );
  }
}


export default App;
