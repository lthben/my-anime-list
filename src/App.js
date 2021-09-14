import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";
import { initializeApp } from "firebase/app";
import User from "./components/User";

const firebaseConfig = {
  apiKey: "AIzaSyBtlru6Q7YVXRxpe_60rBf2Yi8Yi0oE9oY",
  authDomain: "my-anime-list-gasei31.firebaseapp.com",
  projectId: "my-anime-list-gasei31",
  storageBucket: "my-anime-list-gasei31.appspot.com",
  messagingSenderId: "105859178604",
  appId: "1:105859178604:web:f20544f5fa7da3cb377849",
  measurementId: "G-27JKDT0SJ0",
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);
  const [hasSignedIn, setHasSignedIn] = useState(false);

  return (
    <div className="container bg">
      <div className="row funFont">
        <div
          className="col-12   d-flex align-items-center justify-content-center"
          id="main-title-text"
        >
          My Anime List
          <button type="button" id="icon-btn" className="mx-3"></button>
          <span className="short-desc-text">
            {hasSignedIn ? "Welcome user!" : "Not signed in"}
          </span>
        </div>
      </div>
      {!hasSignedIn && (
        <User hasSignedIn={hasSignedIn} setHasSignedIn={setHasSignedIn} />
      )}
      {hasSignedIn && (
        <Form
          setAnimeItem={setAnimeItem}
          animeList={animeList}
          setAnimeList={setAnimeList}
          sortRatings={sortRatings}
          setSortRatings={setSortRatings}
          sortYear={sortYear}
          setSortYear={setSortYear}
        />
      )}
      {hasSignedIn && (
        <AnimeList
          animeItem={animeItem}
          setAnimeItem={setAnimeItem}
          animeList={animeList}
          setAnimeList={setAnimeList}
          sortRatings={sortRatings}
          sortYear={sortYear}
        />
      )}
    </div>
  );
};

export default App;
