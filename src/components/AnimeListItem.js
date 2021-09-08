import React from "react";
import FeaturedItem from "./FeaturedItem";

const AnimeListItem = (props) => {
  const handleClick = () => {}; //display the anime item

  let desc = props.item.description;
  desc = desc.substring(0, 255);
  desc += " ...";

  return (
    <React.Fragment>
      <li>
        #{props.index + 1}
        <img src={props.item.coverImage.medium} />
        {props.item.title.english}
        <div dangerouslySetInnerHTML={{ __html: desc }} />
        <button id={props.index + 1} onClick={handleClick}>
          Details
        </button>
      </li>
      <FeaturedItem item={props.item} />
    </React.Fragment>
  );
};

export default AnimeListItem;
