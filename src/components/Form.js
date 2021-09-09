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
      <div className="row funFont half-row-height" id="main-title-text">
        <div className="col-sm-12 d-flex align-items-center justify-content-center">
          My Anime List
        </div>
      </div>
      <div className="row half-row-height  d-flex align-items-center justify-content-center">
        <div className="col-4">
          <APIquery
            submittedSearch={submittedSearch}
            setSubmittedSearch={setSubmittedSearch}
            setAnimeItem={props.setAnimeItem}
          />
        </div>
        <form
          className="col-4 form-group half-row-height d-flex align-items-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={handleSearchChange}
            value={search}
            className="form-control "
            id="animeTitleInput"
            placeholder="Enter anime title"
          ></input>
        </form>
        <div className="col-4">
          <SortButtons
            animeList={props.animeList}
            setAnimeList={props.setAnimeList}
            sortRatings={props.sortRatings}
            setSortRatings={props.setSortRatings}
            sortYear={props.sortYear}
            setSortYear={props.setSortYear}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
