import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";

const App = () => {
  // const [rating, setRating] = useState(0);
  // const [yearWatched, setYearWatched] = useState(2000);

  const [animeItemData, setAnimeItemData] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItemData objects

  return (
    <div className="container">
      <Form setAnimeItemData={setAnimeItemData} />
      <AnimeList
        animeItemData={animeItemData}
        setAnimeItemData={setAnimeItemData}
        animeList={animeList}
        setAnimeList={setAnimeList}
      />
    </div>
  );
};

export default App;
