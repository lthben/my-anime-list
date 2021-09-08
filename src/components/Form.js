import React, { useState } from "react";
import APIquery from "./APIquery";

const Form = (props) => {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(search); //comment out when developing and not testing
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="animeTitleInput">Anime title</label>
          <input
            type="text"
            onChange={handleSearchChange}
            value={search}
            className="form-control"
            id="animeTitleInput"
            placeholder="Enter anime title"
          ></input>
        </div>
      </form>
      <APIquery
        submittedSearch={submittedSearch}
        setSubmittedSearch={setSubmittedSearch}
        setAnimeItem={props.setAnimeItem}
      />
    </div>
  );
};

export default Form;
