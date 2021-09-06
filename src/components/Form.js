import React from "react";

function Form() {
  // Here we define our query as a multi-line string
  // Storing it in a separate .graphql/.gql file is also possible
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
    status
    description

    episodes
    seasonYear
    countryOfOrigin
    meanScore
    tags {
        name
        description 
    }
    genres
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
  }
}
`;

  // Define our query variables and values that will be used in the query request
  let variables = {
    search: "future diary",
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

  // Make the HTTP Api request
  function makeApiRequest() {
    fetch(url, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);
  }

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data);
  }

  function handleError(error) {
    alert("Error, check console");
    console.error(error);
  }

  return (
    <div>
      <button type="submit" onClick={makeApiRequest}>
        Submit
      </button>
    </div>
  );
}

export default Form;
