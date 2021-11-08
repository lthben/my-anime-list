import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewAccountForm from "./NewAccountForm";
// import SignInForm from "../pages/SignInForm";
import { getAuth, signOut } from "firebase/auth";

const UserButtons = (props) => {
  //props: hasSignedIn, setHasSignedIn, email, setEmail, password, setPassword
  const auth = getAuth();

  const handleSignOut = (e) => {
    console.log("handleSignOut in User.js here");
    signOut(auth)
      .then(async () => {
        // Sign-out successful.
        props.setHasSignedIn(false);
      })
      .catch((error) => {
        // An error happened.
        alert(error.Message);
      });
  };

  const signedOutJSX = (
    <React.Fragment>
      <Link to="/create-new-account">
        <button type="submit" className=" user-btn">
          Register
        </button>
      </Link>
      <Link to="/sign-in">
        <button
          type="submit"
          className="user-btn user-btn-right"
          disabled={props.hasSignedIn}
        >
          Sign In
        </button>
      </Link>
    </React.Fragment>
  );

  console.log("props.hasSignedIn: ", props.hasSignedIn);

  const signedInJSX = (
    <React.Fragment>
      <span className="user-btn welcome-text ">
        {props.hasSignedIn ? "Welcome! " + props.email : null}
      </span>
      <button
        type="button"
        className="user-btn user-btn-right"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {props.hasSignedIn ? signedInJSX : signedOutJSX}
      {/* <Router> */}
      {/* <div
          className="row d-flex align-items-center"
          style={{ height: "20vh" }}
        >
          <div className="col"></div>
        </div> */}
      {/* <Switch>
          <Route path="/create-new-account">
            <NewAccountForm
              hasSignedIn={props.hasSignedIn}
              setHasSignedIn={props.setHasSignedIn}
            />
          </Route>
          <Route path="/sign-in">
            <SignInForm
              hasSignedIn={props.hasSignedIn}
              setHasSignedIn={props.setHasSignedIn}
              email={props.email}
              setEmail={props.setEmail}
              password={props.password}
              setPassword={props.setPassword}
            />
          </Route>
        </Switch>
      </Router> */}
    </React.Fragment>
  );
};

export default UserButtons;
