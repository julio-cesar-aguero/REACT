import React, { Component } from 'react'
 class App extends Component{
   constructor(props){
     super(props)
     this.handleClick = this.handleClick.bind(this)
   }
 
handleClick = () =>{
  console.log('Hola',this)
}
render() {
  return (
    <>
      <h1>Events</h1>
      <button onClick={this.handleClick}>Click me!</button>
    </>
  )
}
}
export default App;
