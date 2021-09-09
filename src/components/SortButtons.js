import React from "react";

const SortButtons = (props) => {
  const sortByRating = () => {
    props.setSortRatings(!props.sortRatings);
  };
  const sortByYear = () => {
    props.setSortYear(!props.sortYear);
  };

  return (
    <React.Fragment>
      <div className="row justify-content-center quarter-row-height">
        <div className="col-sm-12">
          <button
            type="button"
            id="sortByRatingBtn"
            onClick={sortByRating}
            className="btn btn-primary btn-margin"
          >
            My Scores
          </button>
          <button
            type="button"
            id="sortByYearBtn"
            onClick={sortByYear}
            className="btn btn-primary btn-margin"
          >
            Year Watched
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SortButtons;
