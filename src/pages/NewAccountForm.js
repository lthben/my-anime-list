import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  getAuth,
} from "firebase/auth";

const NewAccountForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const auth = getAuth();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setHasSignedIn(true);
        setUserData({
          username: "",
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
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
    <form onSubmit={handleSubmit} className="my-form">
      <div className="mb-3">
        <label htmlFor="inputUserName" className="form-label funFont">
          User name
        </label>
        <input
          type="text"
          className="form-control funFont"
          id="inputUserName"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
          placeholder="Has to be unique"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputFirstName" className="form-label funFont">
          First name
        </label>
        <input
          type="text"
          className="form-control funFont"
          id="inputFirstName"
          name="firstname"
          onChange={handleInputChange}
          value={userData.firstname}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLastName" className="form-label funFont">
          Last name
        </label>
        <input
          type="text"
          className="form-control funFont"
          id="inputLastName"
          name="lastname"
          onChange={handleInputChange}
          value={userData.lastname}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label funFont">
          Email Address
        </label>
        <input
          type="email"
          className="form-control funFont"
          id="inputEmail"
          name="email"
          onChange={handleInputChange}
          value={userData.email}
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
          name="password"
          onChange={handleInputChange}
          value={userData.password}
        ></input>
      </div>
      <button type="submit" className="user-btn funFont">
        Submit
      </button>
    </form>
  );
};

export default NewAccountForm;
