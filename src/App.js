import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";

const App = () => {
  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  return (
    <div className="container">
      <Form
        setAnimeItem={setAnimeItem}
        animeList={animeList}
        setAnimeList={setAnimeList}
        sortRatings={sortRatings}
        setSortRatings={setSortRatings}
        sortYear={sortYear}
        setSortYear={setSortYear}
      />
      <AnimeList
        animeItem={animeItem}
        setAnimeItem={setAnimeItem}
        animeList={animeList}
        setAnimeList={setAnimeList}
        sortRatings={sortRatings}
        sortYear={sortYear}
      />
    </div>
  );
};

export default App;
