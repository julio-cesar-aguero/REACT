import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar title="Rick And Morty App"></Navbar>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      ></Pagination>
      <div className="container">
        <Characters characters={characters} />
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      ></Pagination>

    </>
  );
}

export default App;
