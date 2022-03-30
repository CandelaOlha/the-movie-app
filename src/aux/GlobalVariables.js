export const apiKey = "api_key=9ac7847f0996d2c7efc0e9637bf8fd35";
export const baseUrl = "https://api.themoviedb.org/3/movie/";
export const currentPage = "&page=";
export const popularMoviesUrl = `${baseUrl}popular?${apiKey}${currentPage}`;
export const searchUrl = `https://api.themoviedb.org/3/search/movie?${apiKey}`;
export const topRatedMoviesUrl = `${baseUrl}top_rated?${apiKey}${currentPage}`;
export const upcomingMoviesUrl = `${baseUrl}upcoming?${apiKey}${currentPage}`;