import React, { Component } from "react";
import "./form.css";
class Form extends Component {
  state = {
    name: "",
    gender: "man",
    languaje: "es",
    terms: false,
  };

  render() {
    return (
      <>
        <h1>Michi Formulario</h1>
        <button onClick={this.handleFocus}>Click Me !</button>
      </>
    );
  }
}
export default Form;
