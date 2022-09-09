export const fetchSearchQuery = async (search, page) => {
  const url = `http://api.searchspring.net/api/search/search.json?siteId=${process.env.REACT_APP_SITE_ID}&q=${search}&resultsFormat=native&page=${page}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((searchResult) => {
      return searchResult;
    });
};