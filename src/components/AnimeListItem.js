import React from "react";

const AnimeListItem = (props) => {
  const handleClick = () => {}; //display the anime item

  return (
    <React.Fragment>
      <li onClick={handleClick}>
        #{props.index + 1}
        <img src={props.item.coverImage.medium} />
        {props.item.title.english}
      </li>
    </React.Fragment>
  );
};

export default AnimeListItem;
