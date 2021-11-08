import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import AnimeList from "./components/AnimeList";
import UserButtons from "./components/UserButtons";
import Discover from "./components/Discover";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import * as admin from "firebase-admin";
import logo from "./media/smiling-luffy-face.png";
import NewAccountForm from "./pages/NewAccountForm";
import SignInForm from "./pages/SignInForm";

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
const db = getFirestore(app);
// const admin = require("firebase-admin");

const App = () => {
  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);
  const [hasSignedIn, setHasSignedIn] = useState(false);

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // console.log("user is signed in: ", email);
      // console.log("user.uid: ", uid);
      // getUsers(db).then((userList) =>
      // console.log("userList: ", userList)
      // );

      // ...
    } else {
      // User is signed out
      // ...
      // console.log("User is signed out.");
    }
  });

  return (
    <Router>
      <div className="container bg">
        <div
          className="row funFont d-flex align-items-center justify-content-around mt-3"
          style={{ height: "55px" }}
        >
          <div className="col-lg-4">
            <img src={logo} alt="logo" />
            <span id="main-title-text">My Anime List</span>
          </div>
          <div className="col-lg-4">
            <Link to="/" className="text-decoration-none">
              <button
                type="button"
                id="discover-btn"
                className="nav-btn "
              ></button>
            </Link>
            <Link to="/" className="mx-5">
              <button
                type="button"
                id="search-btn"
                className="nav-btn"
              ></button>
            </Link>
            <Link to="/my-anime-list">
              <button
                type="button"
                id="my-anime-list-btn"
                className="nav-btn "
              ></button>
            </Link>
            {/* <Link to="/user-actions">
              <button
                type="button"
                id="access-btn"
                className="nav-btn pulse-grow-on-hover"
              ></button>
            </Link> */}
          </div>
          <div className="col-lg-4">
            <UserButtons
              hasSignedIn={hasSignedIn}
              setHasSignedIn={setHasSignedIn}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
        <div className="row">
          <Switch>
            <Route exact path="/">
              <Discover />
            </Route>
            <Route path="/create-new-account">
              <NewAccountForm
                hasSignedIn={hasSignedIn}
                setHasSignedIn={setHasSignedIn}
              />
            </Route>
            <Route path="/sign-in">
              <SignInForm
                hasSignedIn={hasSignedIn}
                setHasSignedIn={setHasSignedIn}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </Route>
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
            {/* <Route path="/user-actions">
            <User hasSignedIn={hasSignedIn} setHasSignedIn={setHasSignedIn} />
          </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
