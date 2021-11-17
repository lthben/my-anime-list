import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";

const SignInForm = (props) => {
  //props: hasSignedIn, setHasSignedIn, email, setEmail, password, setPassword

  const history = useHistory();

  const auth = getAuth();

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    props.setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("email", props.email);
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("hasSignedIn", "true");
        props.setHasSignedIn(true);
        props.setEmail("");
        props.setPassword("");
        // alert("Signed in successfully");
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label funFont">
          Email Address
        </label>
        <input
          type="email"
          className="form-control funFont"
          id="inputEmail"
          onChange={handleEmailChange}
          value={props.email}
        ></input>
      </div>
      <div className="mb-5">
        <label htmlFor="inputPassword1" className="form-label funFont">
          Password
        </label>
        <input
          type="password"
          className="form-control funFont"
          id="inputPassword"
          onChange={handlePwdChange}
          value={props.password}
        ></input>
      </div>
      <button type="submit" className="user-btn funFont">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
