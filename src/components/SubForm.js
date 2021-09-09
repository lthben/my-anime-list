import React from "react";

const SubForm = (props) => {
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    let id = "userRatingInput" + props.item.id;
    let rating = document.getElementById(id).value;
    // console.log("in SubForm, rating: ", rating);
    props.setEdit(!props.edit);
    props.setEditInfo({ id: props.item.id, field: "userRating", val: rating });
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

  return (
    <React.Fragment>
      <div className="col-sm-2 row-height has-border-right bkgd-yellow">
        <p className="short-desc-text">My Score ( /100):</p>
        <p className="field-height field-text funFont">
          {props.item.userRating}
        </p>
        <div className="row">
          <form className="col-12" onSubmit={handleRatingSubmit}>
            <input
              type="number"
              id={"userRatingInput" + props.item.id}
              placeholder="e.g. 50"
              className="form-control-sm"
            ></input>
          </form>
        </div>
      </div>
      <div className="col-sm-2 has-border-right bkgd-yellow">
        <p className="short-desc-text">Year Watched (YYYY):</p>
        <p className="field-height field-text funFont">
          {props.item.yearWatched}
        </p>
        <div className="row">
          <form className="col-12" onSubmit={handleYearSubmit}>
            <input
              type="number"
              id={"userYearInput" + props.item.id}
              placeholder="e.g. 2000"
              className="form-control-sm"
            ></input>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubForm;
