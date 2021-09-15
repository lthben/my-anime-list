import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewAccountForm from "./NewAccountForm";
import SignInForm from "./SignInForm";
import { signOut } from "firebase/auth";

const User = (props) => {
  const handleSignOut = () => {
    signOut(props.auth)
      .then(() => {
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
    <Router>
      <div className="row d-flex align-items-center" style={{ height: "20vh" }}>
        <div className="col-12">
          <Link to="/create-new-account">
            <button type="submit" className="btn-primary mx-3">
              Create an account
            </button>
          </Link>
          <Link to="/sign-in">
            <button type="submit" className="btn-primary mx-3">
              Sign In
            </button>
          </Link>
          <button
            type="submit"
            className="btn-primary mx-3"
            onSubmit={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
      <Switch>
        <Route path="/create-new-account">
          <NewAccountForm
            auth={props.auth}
            hasSignedIn={props.hasSignedIn}
            setHasSignedIn={props.setHasSignedIn}
          />
        </Route>
        <Route path="/sign-in">
          <SignInForm
            auth={props.auth}
            hasSignedIn={props.hasSignedIn}
            setHasSignedIn={props.setHasSignedIn}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default User;
