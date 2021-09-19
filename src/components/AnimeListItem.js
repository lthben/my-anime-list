import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";

const AnimeListItem = (props) => {
  //   const [userRatings, setUserRatings] = useState([]);
  //   const [watchYears, setWatchYears] = useState([]);
  const [isDetailsHidden, setIsDetailsHidden] = useState(true);

  const handleDetailsButton = () => {
    console.log("in details button");
    setIsDetailsHidden(!isDetailsHidden);
  };

  const handleRemoveButton = (e) => {
    // e.preventDefault();
    console.log("in handleremovebutton");
    console.log("e.target.id: ", e.target.id);
    let index = e.target.id;
    props.setRemove(!props.remove);
    props.setRemoveIndex(index);
  };

  const tags = props.item.genres.map((ele, ind) => {
    return (
      <React.Fragment>
        <span key={ind} className="badge bg-secondary">
          {ele}
        </span>
        &nbsp;
      </React.Fragment>
    );
  });

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    let id = "userRatingInput" + props.item.id;
    let rating = document.getElementById(id).value;
    // console.log("in SubForm, rating: ", rating);
    props.setEdit(!props.edit);
    props.setEditInfo({
      id: props.item.id,
      field: "userRating",
      val: rating,
    });
    document.getElementById(id).value = "";
  };

  const handleYearSubmit = (e) => {
    e.preventDefault();
    let id = "userYearInput" + props.item.id;
    let year = document.getElementById(id).value;
    // console.log("in SubForm year: ", year);
    props.setEdit(!props.edit);
    props.setEditInfo({ id: props.item.id, field: "yearWatched", val: year });
    document.getElementById(id).value = "";
  };

  let shortenedTitle = props.item.title.english;
  shortenedTitle = shortenedTitle.replace(/(\r\n|\n|\r)/gm, "");
  let completeTitle = "#" + (props.index + 1) + " " + shortenedTitle;
  let limit = 38;
  if (completeTitle.length > limit) {
    completeTitle = completeTitle.substring(0, limit - 3);
    completeTitle += "...";
  }

  return (
    <React.Fragment>
      <div className="row  has-border has-margin">
        <div className="col-4 col-lg-2 bkgd-red ">{completeTitle}</div>
        <div className="col-8 col-lg-4  has-border-right  bkgd-darkblue">
          {tags}
        </div>
        <form
          className="col-2 col-lg-1 form-group has-border-right bkgd-yellow d-flex align-items-center"
          onSubmit={handleRatingSubmit}
        >
          <input
            type="number"
            className=" form-control-sm w-100"
            id={"userRatingInput" + props.item.id}
            placeholder="/100"
          />
        </form>
        <div className="col-2 col-lg-1 has-border-right bkgd-yellow d-flex align-items-center justify-content-center funFont">
          {props.item.userRating}
        </div>
        <form
          className="col-2 col-lg-1 form-group has-border-right bkgd-yellow d-flex align-items-center"
          onSubmit={handleYearSubmit}
        >
          <input
            type="number"
            className="form-control-sm w-100"
            id={"userYearInput" + props.item.id}
            placeholder="yyyy"
          />
        </form>
        <div className="col-2 col-lg-1  has-border-right d-flex align-items-center justify-content-center bkgd-yellow funFont">
          {props.item.yearWatched}
        </div>
        <div className="col-4 col-lg-2 bkgd-orange d-flex align-items-center justify-content-evenly">
          <button
            id="setIsDetailsHidden"
            type="button"
            onClick={handleDetailsButton}
            className="btn-sm btn-light"
          >
            Details
          </button>
          <button
            id={props.index}
            type="button"
            onClick={handleRemoveButton}
            className="btn-sm btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
      {!isDetailsHidden && <FeaturedItem item={props.item} />}
    </React.Fragment>
  );
};

export default AnimeListItem;
