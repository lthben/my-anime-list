import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnimeList from "./pages/MyAnimeList";
import UserButtons from "./components/UserButtons";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import * as admin from "firebase-admin";
import NewAccountForm from "./pages/NewAccountForm";
import SignInForm from "./pages/SignInForm";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import MyAnimeList from "./pages/MyAnimeList";

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
const props = {};
const App = () => {
  const [animeItem, setAnimeItem] = useState({});
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);
  const [hasSignedIn, setHasSignedIn] = useState(false);

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [variables, setVariables] = useState({});

  async function getUsers(db) {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
  }

  useEffect(() => {
    const userStatus = sessionStorage.getItem("hasSignedIn");
    if (userStatus === "true") setHasSignedIn(true);
    else setHasSignedIn(false);
    setEmail(sessionStorage.getItem("email"));
  }, []);

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
      <div className="container">
        <NavBar
          hasSignedIn={hasSignedIn}
          setHasSignedIn={setHasSignedIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <div>
          <Switch>
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
            <Route exact path="/discover">
              <Discover />
            </Route>
            <Route path="/search">
              {/* <Form
                setAnimeItem={setAnimeItem}
                animeList={animeList}
                setAnimeList={setAnimeList}
                sortRatings={sortRatings}
                setSortRatings={setSortRatings}
                sortYear={sortYear}
                setSortYear={setSortYear}
              /> */}
              <Search
                search={search}
                setSearch={setSearch}
                submittedSearch={submittedSearch}
                setSubmittedSearch={setSubmittedSearch}
                variables={variables}
                setVariables={setVariables}
              />
            </Route>
            <Route path="/my-anime-list">
              {hasSignedIn && (
                <MyAnimeList
                  animeItem={animeItem}
                  setAnimeItem={setAnimeItem}
                  animeList={animeList}
                  setAnimeList={setAnimeList}
                  sortRatings={sortRatings}
                  sortYear={sortYear}
                />
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
