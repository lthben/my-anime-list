import React, { useState } from "react";
import SubForm from "./SubForm";
import FeaturedItem from "./FeaturedItem";

const AnimeListItem = (props) => {
  const [userRatings, setUserRatings] = useState([]);
  const [watchYears, setWatchYears] = useState([]);
  const [isDetailsHidden, setIsDetailsHidden] = useState(true);

  const handleDetailsButton = () => {
    console.log("in deatails button");
    setIsDetailsHidden(!isDetailsHidden);
  };

  const handleRemoveButton = (e) => {
    // e.preventDefault();
    console.log("in handelremovetbutton");
    console.log("e.target.id: ", e.target.id);
    let index = e.target.id;
    props.setRemove(!props.remove);
    props.setRemoveIndex(index);
  };

  let desc = props.item.description;
  desc = desc.substring(0, 255);
  desc += " ...";

  return (
    <div>
      #{props.index + 1}
      <img src={props.item.coverImage.medium} />
      {props.item.title.english}
      <div dangerouslySetInnerHTML={{ __html: desc }} />
      {/* SubForm to get userRating and yearWatched */}
      <SubForm
        key={props.index}
        item={props.item}
        userRatings={userRatings}
        setUserRatings={setUserRatings}
        watchYears={watchYears}
        setWatchYears={setWatchYears}
      />
      <button id="setIsDetailsHidden" onClick={handleDetailsButton}>
        Details
      </button>
      <button id={props.index} onClick={handleRemoveButton}>
        Remove
      </button>
      {!isDetailsHidden && <FeaturedItem item={props.item} />}
    </div>
  );
};

export default AnimeListItem;
