import React from "react";

const SubForm = (props) => {
  const handleRatingSubmit = () => {
    let id = "userRatingInput" + props.item.id;
    let rating = document.getElementById(id).value;
    // console.log("in SubForm, rating: ", rating);
    props.setEdit(!props.edit);
    props.setEditInfo({ id: props.item.id, field: "userRating", val: rating });
    document.getElementById(id).value = "";
  };

  const handleYearSubmit = () => {
    let id = "userYearInput" + props.item.id;
    let year = document.getElementById(id).value;
    // console.log("in SubForm year: ", year);
    props.setEdit(!props.edit);
    props.setEditInfo({ id: props.item.id, field: "yearWatched", val: year });
    document.getElementById(id).value = "";
  };

  return (
    <form>
      <p>My Score Rating: {props.item.userRating} / 100</p>
      <label htmlFor="userRatingInput">Enter rating: </label>
      <input
        type="number"
        id={"userRatingInput" + props.item.id}
        placeholder="e.g. 50"
      ></input>
      <button type="button" onClick={handleRatingSubmit}>
        Submit
      </button>
      <p>Year Watched: {props.item.yearWatched}</p>
      <label htmlFor="userYearInput">Enter year watched (YYYY): </label>
      <input
        type="number"
        id={"userYearInput" + props.item.id}
        placeholder="e.g. 2000"
      ></input>
      <button type="button" onClick={handleYearSubmit}>
        Submit
      </button>
    </form>
  );
};

export default SubForm;
