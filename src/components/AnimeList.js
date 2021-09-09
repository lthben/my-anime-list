import React, { useState, useEffect } from "react";
import AnimeListItem from "./AnimeListItem";

const AnimeList = (props) => {
  const [removeIndex, setRemoveIndex] = useState(0);
  const [remove, setRemove] = useState(false);
  const [editInfo, setEditInfo] = useState({ id: "", field: "", val: "" });
  const [edit, setEdit] = useState(false);

  const addToList = () => {
    // console.log("adding to list");
    props.setAnimeList((prevstate) => {
      let a = [...prevstate, props.animeItem];
      return a.filter((value) => Object.keys(value).length !== 0); //filter out initial empty object state
    });
  };

  const removeFromList = (index) => {
    // console.log("in RemoveFromList");
    let nestedCopy = JSON.parse(JSON.stringify(props.animeList));
    nestedCopy.splice(index, 1);
    props.setAnimeList(nestedCopy);
  };

  const editList = () => {
    let index = props.animeList.findIndex((ele) => ele.id === editInfo.id);
    // console.log("in animelist, index ", index);
    let nestedCopy = JSON.parse(JSON.stringify(props.animeList));
    if (editInfo.field === "userRating") {
      // console.log("field: ", editInfo.field);
      // console.log("index: ", index);
      // console.log("val: ", editInfo.val);
      nestedCopy[index].userRating = editInfo.val;
    } else if (editInfo.field === "yearWatched") {
      // console.log("field: ", editInfo.field);
      // console.log("index: ", index);
      // console.log("val: ", editInfo.val);
      nestedCopy[index].yearWatched = editInfo.val;
    }
    props.setAnimeList(nestedCopy);
  };

  const sortListByRating = () => {
    let nestedCopy = JSON.parse(JSON.stringify(props.animeList));
    if (props.sortRatings)
      nestedCopy.sort((a, b) =>
        a.userRating > b.userRating ? 1 : b.userRating > a.userRating ? -1 : 0
      );
    else
      nestedCopy.sort((a, b) =>
        a.userRating < b.userRating ? 1 : b.userRating < a.userRating ? -1 : 0
      );
    props.setAnimeList(nestedCopy);
  };

  const sortListByYear = () => {
    let nestedCopy = JSON.parse(JSON.stringify(props.animeList));
    if (props.sortYear)
      nestedCopy.sort((a, b) =>
        a.yearWatched > b.yearWatched
          ? 1
          : b.yearWatched > a.yearWatched
          ? -1
          : 0
      );
    else
      nestedCopy.sort((a, b) =>
        a.yearWatched < b.yearWatched
          ? 1
          : b.yearWatched < a.yearWatched
          ? -1
          : 0
      );
    props.setAnimeList(nestedCopy);
  };

  useEffect(() => {
    addToList();
  }, [props.animeItem]);

  useEffect(() => {
    removeFromList(removeIndex);
  }, [removeIndex, remove]);

  useEffect(() => {
    editList();
  }, [editInfo, edit]);

  useEffect(() => {
    sortListByRating();
  }, [props.sortRatings]);

  useEffect(() => {
    sortListByYear();
  }, [props.sortYear]);

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
          edit={edit}
          setEdit={setEdit}
          editInfo={editInfo}
          setEditInfo={setEditInfo}
        />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      {/* Here the magic happens */}
      {animeItems}
    </React.Fragment>
  );
};

export default AnimeList;
