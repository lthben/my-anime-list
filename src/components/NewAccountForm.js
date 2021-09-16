import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  getAuth,
} from "firebase/auth";

const NewAccountForm = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setHasSignedIn(true);
        setEmail("");
        setPwd("");
        sendEmailVerification(user).then(() => {
          alert("Account created successfully. You are now signed in.");
        });
      })
      // ...
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
            value={email}
            placeholder="new account email"
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
            value={pwd}
            placeholder="new account password"
          ></input>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default NewAccountForm;
