import React from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
function App() {
  return (
    <>
      <Header></Header>
      <h1>Componentes</h1>
      <Person name="Pepe" age={27} />
      <Person name="Michi" age={1} />
      <Person name="Zoe" age={7} />
    </>
  );
}

export default App;
