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
      <div className="row justify-content-center">
        <div className="col-12">
          <button
            type="button"
            id="sortByRatingBtn"
            onClick={sortByRating}
            className="btn-sm btn-light btn-margin"
          >
            My Scores
          </button>
          <button
            type="button"
            id="sortByYearBtn"
            onClick={sortByYear}
            className="btn-sm btn-light btn-margin"
          >
            Year Watched
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SortButtons;
