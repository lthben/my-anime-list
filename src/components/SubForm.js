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
    <React.Fragment>
      <div className="col-sm-2 row-height has-border-right">
        <p>My Score ( /100):</p>
        <p className="field-height field-text funFont">
          {props.item.userRating}
        </p>
        {/* <label htmlFor="userRatingInput" className="funFont label-input"> */}
        {/* Enter rating:{" "} */}
        {/* </label> */}
        <div className="row no-padding ">
          <div className="col-7 ">
            <input
              type="number"
              id={"userRatingInput" + props.item.id}
              placeholder="e.g. 50"
              className="small-input-width"
            ></input>
          </div>
          <div className="col-5 ">
            <button type="button" onClick={handleRatingSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-2 has-border-right">
        <p>Year Watched (YYYY):</p>
        <p className="field-height field-text funFont">
          {props.item.yearWatched}
        </p>
        {/* <label htmlFor="userYearInput" className="funFont label-input"> */}
        {/* Enter year watched (YYYY):{" "} */}
        {/* </label> */}
        <div className="row no-padding ">
          <div className="col-7 ">
            <input
              type="number"
              id={"userYearInput" + props.item.id}
              placeholder="e.g. 2000"
              className="small-input-width"
            ></input>
          </div>
          <div className="col-5 ">
            <button type="button" onClick={handleYearSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubForm;
