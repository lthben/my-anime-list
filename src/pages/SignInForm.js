import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = (props) => {
  //props: hasSignedIn, setHasSignedIn, email, setEmail, password, setPassword

  const auth = getAuth();

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    props.setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setHasSignedIn(true);
        props.setEmail("");
        props.setPassword("");
        alert("Signed in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3 d-flex justify-content-center">
        <label
          htmlFor="exampleInputEmail"
          className="form-label has-text-shadow col-md-2"
        >
          Email Address
        </label>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            onChange={handleEmailChange}
            value={props.email}
            placeholder="existing user email"
          ></input>
        </div>
      </div>
      <div className="row mb-3 d-flex justify-content-center">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label has-text-shadow col-md-2"
        >
          Password
        </label>
        <div className="col-md-4">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            onChange={handlePwdChange}
            value={props.password}
            placeholder="existing user password"
          ></input>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
