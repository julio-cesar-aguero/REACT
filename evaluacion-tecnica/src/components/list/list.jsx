import React, { Component } from "react";
import './list.css'
const List = ({post}) => {
    const handleImp = () =>{
       
    }
  return (
    <ul className="lista__empleados">
    <div className="item">
      <li>Michi</li>
      <div className="buttons buttons-item">
        <button onClick={handleImp}>Modificar</button>
        <button className="button__delete">Eliminar</button>
      </div>
    </div>
  </ul> 
  );
};
export default List;