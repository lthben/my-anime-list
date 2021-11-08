import React, { useEffect } from "react";

const APIquery = (props) => {
  //props: submittedSearch, setSubmittedSearch, variables

  useEffect(() => {
    if (props.submittedSearch.length > 0) {
      console.log("variables: ", props.variables);
      fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
    }
    return () => {
      props.setSubmittedSearch("");
    };
  }, [props.variables]);

  const handleResponse = (response) => {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  };

  const handleData = (data) => {
    console.log("in APIquery: ", data.data);
    // let myObj = data.data.Page.media;
    // myObj.userRating = "";
    // myObj.yearWatched = "";
    // props.setAnimeItem(myObj);
  };

  const handleError = (error) => {
    // alert("Anime title not found");
    console.error(error.errors[0].status);
    console.error(error);
  };

  let query = `
    query ($page: Int, $perPage: Int, $search: String, $sortby: [MediaSort]) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(search: $search, type: ANIME, sort: $sortby) {
          id
          title {
            romaji
            english
          }
          format
          bannerImage
          coverImage {
            large
            medium
          }
          description
          characters(sort: ROLE, role: MAIN) {
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
          averageScore
          popularity
          trending
          studios(isMain: true) {
            nodes {
              name
            }
          }
        }
      }      
    }
  `;

  // Define our query variables and values that will be used in the query request
  // let variables = {
  //   page: 1,
  //   perPage: 10,
  //   search: props.submittedSearch,
  //   sortby: "POPULARITY_DESC",
  // };

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
        variables: props.variables,
      }),
    };

  return <div></div>;
};

export default APIquery;
