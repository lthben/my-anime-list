import React, { useState, useEffect } from "react";
import AnimeListItem from "./AnimeListItem";

const AnimeList = (props) => {
  const [removeIndex, setRemoveIndex] = useState(0);
  const [remove, setRemove] = useState(false);

  const removeFromList = (index) => {
    console.log("in RemoveFromList");
    const nestedCopy = JSON.parse(JSON.stringify(props.animeList));
    // console.log("nestedCopy is an array? ", Array.isArray(nestedCopy));
    nestedCopy.splice(index, 1);
    props.setAnimeList(nestedCopy);
    // props.setAnimeList(props.animeList.splice(index, 1));
  };

  const addToList = () => {
    console.log("adding to list");
    props.setAnimeList((prevstate) => {
      let a = [...prevstate, props.animeItem];
      return a.filter((value) => Object.keys(value).length !== 0); //filter out initial empty object state
    });
    // console.log("animeList: ", props.animeList); //don't put here cos setState takes a while
  };

  useEffect(() => {
    addToList();
  }, [props.animeItem]);

  useEffect(() => {
    removeFromList(removeIndex);
  }, [removeIndex, remove]);

  const animeItems = props.animeList.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <AnimeListItem
          item={item}
          index={index}
          animeItem={props.animeItem}
          setAnimeItem={props.setAnimeItem}
          animeList={props.animeList}
          setAnimeList={props.setAnimeList}
          remove={remove}
          setRemoveIndex={setRemoveIndex}
          setRemove={setRemove}
        />
      </React.Fragment>
    );
  });

  return <div>{animeItems}</div>;
};

export default AnimeList;
