const handleResponse = (response) => {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
};

const handleData = (data) => {
  console.log(data);
};

const handleError = (error) => {
  alert("Error, check console");
  console.error(error);
};

export const makeAPIRequest = (_search) => {
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
    search: _search,
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

  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
};
