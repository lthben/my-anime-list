import React, { useState, useEffect } from "react";
import APIquery from "../components/APIquery";
// import SortButtons from "./SortButtons";

const Search = (props) => {
  //props: search, setSearch, submittedSearch, setSubmittedSearch, variables, setVariables

  useEffect(() => {
    props.setVariables({
      page: 1,
      perPage: 10,
      search: props.submittedSearch,
      sortby: "POPULARITY_DESC",
    });
  }, [props.submittedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch("");
    props.setSubmittedSearch(props.search); //comment out when developing and not testing
  };

  const handleSearchChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputAnimeTitle" className="form-label funFont">
            Enter an anime title
          </label>
          <input
            type="text"
            className="form-control funFont"
            id="inputAnimeTitle"
            onChange={handleSearchChange}
            value={props.search}
          ></input>
        </div>
        <button type="submit" className="user-btn funFont">
          Submit
        </button>

        {/* <SortButtons
            animeList={props.animeList}
            setAnimeList={props.setAnimeList}
            sortRatings={props.sortRatings}
            setSortRatings={props.setSortRatings}
            sortYear={props.sortYear}
            setSortYear={props.setSortYear}
          /> */}
      </form>
      <APIquery
        submittedSearch={props.submittedSearch}
        setSubmittedSearch={props.setSubmittedSearch}
        // setAnimeItem={props.setAnimeItem}
        variables={props.variables}
      />
    </React.Fragment>
  );
};

export default Search;
