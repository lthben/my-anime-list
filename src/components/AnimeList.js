import React, { useEffect } from "react";
import AnimeListItem from "./AnimeListItem";

const AnimeList = (props) => {
  const addToList = () => {
    console.log("adding to list");
    props.setAnimeList((prevstate) => {
      let a = [...prevstate, props.animeItem];
      return a.filter((value) => Object.keys(value).length !== 0); //filter out initial empty object state
    });

    // console.log("animeList: ", props.animeList); //don't put here cos setState takes a while
    // console.log("animeItem", props.animeItem?.data);
  };

  useEffect(addToList, [props.animeItem]);

  const animeItems = props.animeList.map((item, index) => {
    return <AnimeListItem item={item} index={index} key={index} />;
  });

  console.log("anime list: ", props.animeList);

  return (
    <div>
      <ul>{animeItems}</ul>
    </div>
  );
};

export default AnimeList;
