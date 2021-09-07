import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";

const App = () => {
  const [search, setSearch] = useState("");
  // const [rating, setRating] = useState(0);
  // const [yearWatched, setYearWatched] = useState(2000);

  // const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="container">
      <Form search={search} setSearch={setSearch} />
      <AnimeList animeList={animeList} />
    </div>
  );
};

export default App;
