import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";

const App = () => {
  // const [rating, setRating] = useState(0);
  // const [yearWatched, setYearWatched] = useState(2000);

  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects

  return (
    <div className="container">
      <Form setAnimeItem={setAnimeItem} />
      <AnimeList
        animeItem={animeItem}
        animeList={animeList}
        setAnimeList={setAnimeList}
      />
    </div>
  );
};

export default App;
