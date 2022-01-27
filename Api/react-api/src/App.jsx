import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);

  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>API</h1>
      <ul>
        {
          !todos ? <h1>Cargando . . .</h1>:todos.map( (todo, index)=>{
            return <li key={index}>{todo.id}{todo.completed ?' completo':' X'}</li>
          })
        }
      </ul>
    </>
  );
}

export default App;
