const TOP_HEADLINES_URL = 'https://newsapi.org/v2/top-headlines';
const EVERYTHING_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '20a27863971d4bcab60555aa6810d031';
const PAGE_SIZE = 20;
const COUNTRY = 'us';
const LANGUAGE = 'en';
const SORT_BY = 'popularity';

const fetchWrapper = (url) => {
  const params = { method: 'GET' };

  return fetch(url, params)
    .then(res => res.json())
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

export const fetchTopHeadlinesByCategory = (category, page) => {
  const url = `${TOP_HEADLINES_URL}?country=${COUNTRY}&apiKey=${API_KEY}`
    + `&pageSize=${PAGE_SIZE}&category=${category}&page=${page}`;
  return fetchWrapper(url);
};

export const fetchEverythingByQuery = (query) => {
  const encodedQuery = encodeURI(query);
  const url = `${EVERYTHING_URL}?apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`
  + `&language=${LANGUAGE}&sortBy=${SORT_BY}&q=${encodedQuery}`;
  return fetchWrapper(url);
};
