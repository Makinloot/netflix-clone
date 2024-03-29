
const requests = {
  trending: `/trending/all/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=27`,
  fantasy: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=14`,
  animation: `/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=16`,
}

export default requests