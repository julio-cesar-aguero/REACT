import React, { useState} from "react";

import { useHttp } from './hooks/useHttp'

const App = () => {

  
  const [id, setId] = useState(1);
  const [post, setPost] = useHttp(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const handlePrevId = () => {
    if (id > 100) setId(id - 100);
  };

  const handleNextId = () => {
    setId(id + 100);
  };

  return (
    <>
      <h1>Numero : </h1>
      <h2>{id}</h2>
      <button onClick={handlePrevId}>Prev Id</button>
      <button onClick={handleNextId}>Next Id</button>
    </>
  );
};

export default App;
