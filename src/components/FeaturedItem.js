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
    <React.Fragment>
      <div className="row row-margin bkgd-white ">
        <div className="col-12">
          <img src={props.item.bannerImage} alt="banner pic" width="100%" />
        </div>
      </div>
      <div className="row  row-margin bkgd-white">
        <div className="col-12">
          <p></p>
          <p className="funFont">Main characters: </p>
          <p>{characters}</p>
          <p className="funFont">Description: </p>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
          <p className="funFont">Genres: </p>
          <p>{genres} </p>
          <p className="funFont">Tags: </p>
          <p>{tags}</p>
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center row-margin bkgd-white">
        <div className="col-2 ">
          <img src={props.item.coverImage.large} alt="cover pic" width="100%" />
        </div>
        <div className="col-2 ">
          <p className="funFont">Year Released: </p>
          <p>{props.item.seasonYear}</p>
        </div>
        <div className="col-2 ">
          <p className="funFont">Episodes: </p>
          <p>{props.item.episodes}</p>
        </div>
        <div className="col-2 ">
          <p className="funFont">Country of Origin: </p>
          <p>{props.item.countryOfOrigin}</p>
        </div>
        <div className="col-2 ">
          <p className="funFont">Status: </p>
          <p>{props.item.status}</p>
        </div>
        <div className="col-2 ">
          <p className="funFont">Public Score Rating: </p>
          <p>{props.item.meanScore} / 100</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedItem;
