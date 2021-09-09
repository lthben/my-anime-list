import React, { useState } from "react";
import SubForm from "./SubForm";
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

  let desc = props.item.description;
  desc = desc.substring(0, 255);
  desc += " ...";

  return (
    <React.Fragment>
      <div className="row row-height d-flex has-border">
        <div className="col-sm-1 row-height d-flex align-items-center justify-content-center field-text funFont">
          #{props.index + 1}
        </div>
        <div className="col-sm-1 no-padding row-height d-flex align-items-center justify-content-center">
          <img src={props.item.coverImage.medium} alt="cover pic medium" />
        </div>
        <div className="col-sm-1 has-border-right row-height d-flex align-items-center justify-content-center">
          <span className="align-middle subfield-text funFont">
            {props.item.title.english}
          </span>
        </div>
        <div className="col-sm-4  row-height has-border-right d-flex align-items-center justify-content-center">
          <span dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        {/* SubForm to get userRating and yearWatched */}
        <SubForm
          key={props.index}
          item={props.item}
          edit={props.edit}
          setEdit={props.setEdit}
          editInfo={props.editInfo}
          setEditInfo={props.setEditInfo}
        />
        <div className="col-sm-1 row-height ">
          <div className="half-row-height d-flex align-items-center justify-content-center">
            <button
              id="setIsDetailsHidden"
              type="button"
              onClick={handleDetailsButton}
            >
              Details
            </button>
          </div>
          <div className="half-row-height d-flex align-items-center justify-content-center">
            <button id={props.index} type="button" onClick={handleRemoveButton}>
              Remove
            </button>
          </div>
        </div>
      </div>
      {!isDetailsHidden && <FeaturedItem item={props.item} />}
    </React.Fragment>
  );
};

export default AnimeListItem;
