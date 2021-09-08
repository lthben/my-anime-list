import React from "react";

const SubForm = (props) => {
  const handleRatingSubmit = async (e) => {
    e.preventDefault();
    let newRating = document.getElementById("userRatingInput").value;
  };

  const handleYearSubmit = async (e) => {
    e.preventDefault();
    let newYear = document.getElementById("userYearInput").value;
  };

  return (
    <form>
      <p>My Score Rating: {props.item.userRating} / 100</p>
      <label htmlFor="userRatingInput">Enter rating: </label>
      <input
        type="number"
        id="userRatingInput"
        placeholder={props.item.userRating}
      ></input>
      <button type="submit" onClick={handleRatingSubmit}>
        Submit
      </button>
      <p>Year Watched: {props.item.yearWatched}</p>
      <label htmlFor="userYearInput">Enter year watched (YYYY): </label>
      <input
        type="number"
        id="userYearInput"
        placeholder={props.item.yearWatched}
      ></input>
      <button type="submit" onClick={handleYearSubmit}>
        Submit
      </button>
    </form>
  );
};

export default SubForm;
