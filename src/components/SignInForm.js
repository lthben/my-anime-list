import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInForm = (props) => {
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
    signInWithEmailAndPassword(auth, email, pwd)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setHasSignedIn(true);
        setEmail("");
        setPwd("");
        alert("Signed in successfully");
        // ...
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
            value={email}
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
            value={pwd}
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
