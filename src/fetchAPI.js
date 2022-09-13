export const fetchSearchQuery = async (search, page) => {
  const url = `https://api.searchspring.net/api/search/search.json?siteId=${process.env.REACT_APP_SITE_ID}&q=${search}&resultsFormat=native&page=${page}`;
  return await fetch(url, {
    headers: new Headers({
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((res) => res.json())
    .then((searchResult) => {
      console.log(searchResult);
      return searchResult;
    });
};

// export const fetchSuggestQuery = async (query, page) => {
//   const url = `https://api.searchspring.net/api/suggest/query?siteId=${process.env.REACT_APP_SITE_ID}&query=${query}`;
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((searchResult) => {
//       return searchResult;
//     });
// };
