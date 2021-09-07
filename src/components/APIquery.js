import React, { useEffect } from "react";
import animeItem from "./AnimeItem";

const APIquery = (props) => {
  const handleResponse = (response) => {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  };

  const handleData = (data) => {
    console.log(data);
    props.setAnimeItemData(data);
  };

  const handleError = (error) => {
    alert("Anime title not found");
    //   console.error(error.errors[0].status);
    console.error(error);
  };

  const makeAPIRequest = () => {
    let query = `
        query ($search: String) {
            Media (search: $search, type: ANIME, format: TV) { 
                id
                title {
                romaji
                english
                }
                format
                bannerImage
                coverImage {
                    medium
                }
                description
                characters (sort: ROLE, role: MAIN) {
                nodes {
                    name {
                    full
                    }
                }
                edges {
                    role
                }
                }
                genres
                tags {
                    name
                    description 
                }
                seasonYear
                episodes
                countryOfOrigin
                status
                meanScore
            }
        }
    `;

    // Define our query variables and values that will be used in the query request
    let variables = {
      search: props.submittedSearch,
    };

    // Define the config we'll need for our Api request
    let url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };

    if (props.submittedSearch.length > 0) {
      console.log("fetching based on submittedSearch: ", props.submittedSearch);
      fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
    }
  };

  useEffect(() => {
    makeAPIRequest();

    // return () => {
    //   props.setSubmittedSearch(""); //need to clean up, else will take prev submittedSearch as input
    // };
  }, [props.submittedSearch]);

  return <div></div>;
};

export default APIquery;
