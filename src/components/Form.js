import React, { useState } from "react";
import APIquery from "./APIquery";
import SortButtons from "./SortButtons";

const Form = (props) => {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    setSubmittedSearch(search); //comment out when developing and not testing
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="row funFont">
        <div
          className="col-12 d-flex align-items-center justify-content-center"
          id="main-title-text"
        >
          My Anime List
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <form
          className="col-12  input-group  d-flex align-items-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={handleSearchChange}
            value={search}
            className="form-control-sm "
            id="animeTitleInput"
            placeholder="Enter anime title"
          ></input>
          <SortButtons
            animeList={props.animeList}
            setAnimeList={props.setAnimeList}
            sortRatings={props.sortRatings}
            setSortRatings={props.setSortRatings}
            sortYear={props.sortYear}
            setSortYear={props.setSortYear}
          />
        </form>
      </div>
      <APIquery
        submittedSearch={submittedSearch}
        setSubmittedSearch={setSubmittedSearch}
        setAnimeItem={props.setAnimeItem}
      />
    </React.Fragment>
  );
};

export default Form;
