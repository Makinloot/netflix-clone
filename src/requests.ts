import API_KEY from '../key'

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  history: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
}

export default requests