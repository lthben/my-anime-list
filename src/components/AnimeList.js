import React, { useState, useEffect } from "react";
import AnimeListItem from "./AnimeListItem";

const AnimeList = (props) => {
  const [animeList, setAnimeList] = useState([]); //array of animeItem objects
  const [removeIndex, setRemoveIndex] = useState(0);
  const [remove, setRemove] = useState(false);
  const [editInfo, setEditInfo] = useState({ id: "", field: "", val: "" });
  const [edit, setEdit] = useState(false);
  const [sortRatings, setSortRatings] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  const addToList = () => {
    // console.log("adding to list");
    setAnimeList((prevstate) => {
      let a = [...prevstate, props.animeItem];
      return a.filter((value) => Object.keys(value).length !== 0); //filter out initial empty object state
    });
  };

  const removeFromList = (index) => {
    // console.log("in RemoveFromList");
    let nestedCopy = JSON.parse(JSON.stringify(animeList));
    nestedCopy.splice(index, 1);
    setAnimeList(nestedCopy);
  };

  const editList = () => {
    let index = animeList.findIndex((ele) => ele.id === editInfo.id);
    // console.log("in animelist, index ", index);
    let nestedCopy = JSON.parse(JSON.stringify(animeList));
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
    setAnimeList(nestedCopy);
  };

  const sortByRating = () => {
    setSortRatings(!sortRatings);
  };
  const sortByYear = () => {
    setSortYear(!sortYear);
  };

  const sortListByRating = () => {
    let nestedCopy = JSON.parse(JSON.stringify(animeList));
    if (sortRatings)
      nestedCopy.sort((a, b) =>
        a.userRating > b.userRating ? 1 : b.userRating > a.userRating ? -1 : 0
      );
    else
      nestedCopy.sort((a, b) =>
        a.userRating < b.userRating ? 1 : b.userRating < a.userRating ? -1 : 0
      );
    setAnimeList(nestedCopy);
  };

  const sortListByYear = () => {
    let nestedCopy = JSON.parse(JSON.stringify(animeList));
    if (sortYear)
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
    setAnimeList(nestedCopy);
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
  }, [sortRatings]);

  useEffect(() => {
    sortListByYear();
  }, [sortYear]);

  const animeItems = animeList.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <AnimeListItem
          item={item}
          index={index}
          animeItem={props.animeItem}
          setAnimeItem={props.setAnimeItem}
          animeList={animeList}
          setAnimeList={setAnimeList}
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
      <div className="row justify-content-center quarter-row-height">
        <div className="col-sm-12">
          <span className="label-input funFont">Sort: </span>
          <button type="button" id="sortByRatingBtn" onClick={sortByRating}>
            My Scores
          </button>
          <button type="button" id="sortByYearBtn" onClick={sortByYear}>
            Year Watched
          </button>
        </div>
      </div>
      {/* Here the magic happens */}
      {animeItems}
    </React.Fragment>
  );
};

export default AnimeList;
