import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewAccountForm from "./NewAccountForm";
// import SignInForm from "../pages/SignInForm";
import { getAuth, signOut } from "firebase/auth";

const UserButtons = (props) => {
  //props: hasSignedIn, setHasSignedIn, email, setEmail, password, setPassword
  const auth = getAuth();

  const signedInJSX = (
    <div>
      <Link to="/create-new-account">
        <button type="submit" className="btn-primary mx-3">
          Create an account
        </button>
      </Link>
      <Link to="/sign-in">
        <button
          type="submit"
          className="btn-primary mx-3"
          disabled={props.hasSignedIn}
        >
          Sign In
        </button>
      </Link>
    </div>
  );

  console.log("props.hasSignedIn: ", props.hasSignedIn);

  const signedOutJSX = (
    <div>
      <div className="short-desc-text">
        {props.hasSignedIn ? "Welcome " + props.email : null}
      </div>
      <button
        type="button"
        className="btn-primary mx-3"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );

  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("handleSignOut in User.js here");
    signOut(auth)
      .then(async () => {
        // Sign-out successful.
        props.setHasSignedIn(false);
        alert("Goodbye!");
      })
      .catch((error) => {
        // An error happened.
        alert(error.Message);
      });
  };

  return (
    <div>
      {props.hasSignedIn ? signedOutJSX : signedInJSX}
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
    </div>
  );
};

export default UserButtons;
