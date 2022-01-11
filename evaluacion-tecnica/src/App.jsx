import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/list/list";
import { useHttp } from "./hooks/useHttp";
import "./App.css";
const Single=`<div className="single">
          <h1>Empleado : </h1>
          <div className="image__container">
            <img src={profileImg} alt="" />
          </div>
          <small>{post.title}</small>
          <div className="buttons">
            <button onClick={handlePrevId}>Anterior</button>
            <button onClick={handleNextId}>Siguiente</button>
          </div>
        </div>`
        
const App = () => {
  const [id, setId] = useState(1);
  const [post, setPost] = useHttp(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const handlePrevId = () => {
    if (id > 1) setId(id - 1);
    console.log(post);
  };

  const handleNextId = () => {
    setId(id + 1);
    console.log(post);
  };
  const profileImg = require("./images/1.png");
  return (
    <>
      <main className="main">
        <div className="plural">
          <List>{post.name}</List>
          <Form>{post}</Form>
        </div>
      </main>
    </>
  );
};

export default App;
