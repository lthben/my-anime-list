import React from "react";

const FeaturedItem = (props) => {
  const desc = props.item.description;
  let _genres = props.item.genres;
  let genres = [];
  for (const item of _genres) {
    genres.push(" " + item);
  }
  genres = genres.toString();
  let tags = [];
  for (const item of props.item.tags) {
    //array of objects {name, description}
    tags.push(" " + item.name);
  }
  tags = tags.toString();
  let _characters = props.item.characters.nodes; //array of {name: {full:}}
  let characters = [];
  for (const ch of _characters) {
    characters.push(" " + ch.name.full);
  }
  characters = characters.toString();

  return (
    <div>
      <img src={props.item.bannerImage} />
      <img src={props.item.coverImage.large} />
      <p>Description: </p>
      <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      <p>Main characters: {characters}</p>
      <p>Genres: {genres} </p>
      <p>Tags: {tags}</p>
      <p>Year Released: {props.item.seasonYear}</p>
      <p>Episodes: {props.item.episodes}</p>
      <p>Country of Origin: {props.item.countryOfOrigin}</p>
      <p>Status: {props.item.status}</p>
      <p>Public Score Rating: {props.item.meanScore} / 100</p>
    </div>
  );
};

export default FeaturedItem;
