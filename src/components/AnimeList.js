import React, { useState, useEffect } from "react";

const AnimeList = (props) => {
  const addToList = () => {
    props.setAnimeList((prevstate) => {
      return [props.animeItemData, ...prevstate];
    });

    // props.setAnimeList(props.animeList.unshift(props.animeItemData));
    console.log("animeList: ", props.animeList);
    // console.log("animeItemData", props.animeItemData);
  };

  useEffect(addToList, [props.animeItemData]);

  const handleClick = () => {};

  const animeItems = props.animeList.map((ele, index) => {
    return (
      <li id={index} onClick={handleClick} key={index}>
        #{index + 1}
      </li>
    );
  });

  return (
    <div>
      <ul>{animeItems}</ul>
    </div>
  );
};

export default AnimeList;
