import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";

const App = () => {
  const [animeItem, setAnimeItem] = useState({});

  return (
    <div className="container">
      <Form setAnimeItem={setAnimeItem} />
      <AnimeList animeItem={animeItem} setAnimeItem={setAnimeItem} />
    </div>
  );
};

export default App;
