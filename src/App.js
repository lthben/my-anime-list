import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import User from "./components/User";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Discover from "./components/Discover";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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
const analytics = getAnalytics(app);

// const admin = require("firebase-admin");
// let serviceAccount = require("./my-anime-list-gasei31-firebase-adminsdk-btivs-73a8f85301.json");
// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// });
// const db = admin.firestore();
const db = getFirestore(app);

const App = () => {
  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);
  const [hasSignedIn, setHasSignedIn] = useState(false);

  const auth = getAuth();
  const [email, setEmail] = useState("");

  async function getUsers(db) {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setEmail(user.email);
      setHasSignedIn(true);
      console.log("user is signed in: ", email);
      console.log("user.uid: ", uid);
      getUsers(db).then((userList) => console.log(userList));

      // ...
    } else {
      // User is signed out
      // ...
      console.log("User is signed out.");
    }
  });

  return (
    <Router>
      <div className="container bg">
        <br />
        <div className="row funFont d-flex align-items-center justify-content-center ">
          <div className=".d-md-none .d-lg-block col-xl-4"></div>
          <div className="col-6 col-xl-4">
            <Link to="/my-anime-list">
              <span id="main-title-text">My Anime List</span>
            </Link>
          </div>
          <div className="col-3 col-xl-2 d-flex justify-content-around">
            <Link to="/">
              <button
                type="button"
                id="discover-btn"
                // className="btn-margin"
              ></button>
            </Link>
            <Link to="/user-actions">
              <button
                type="button"
                id="access-btn"
                // className="btn-margin"
              ></button>
            </Link>
          </div>
          <div className="col-3 col-xl-2">
            <span className="short-desc-text">
              {hasSignedIn ? "Welcome " + email + "!" : "Not signed in"}
            </span>
          </div>
        </div>
        <Switch>
          <Route path="/my-anime-list">
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
          </Route>
          <Route exact path="/">
            <Discover />
          </Route>
          <Route path="/user-actions">
            <User
              hasSignedIn={hasSignedIn}
              setHasSignedIn={setHasSignedIn}
              auth={auth}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
