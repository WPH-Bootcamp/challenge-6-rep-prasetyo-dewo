// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_KEY = 'cb28cdd6a89a036f4b59c9249b05ff3a';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjI4Y2RkNmE4OWEwMzZmNGI1OWM5MjQ5YjA1ZmYzYSIsIm5iZiI6MTc0OTgzNDM1NS4wNDcwMDAyLCJzdWIiOiI2ODRjNWE3MzcwZTg2OGI4ODBiMGRhYmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3NPAZ8McX5qudH4B2FIvniRxWnzsbEPzPQBErx_pybA';
const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
  'Content-Type': 'application/json',
};

export const tmdbApi = {
  getTrending: async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week`, {
      headers,
    });
    return response.json();
  },

  // Get popular movies
  getPopular: async () => {
    const response = await fetch(`${BASE_URL}/movie/popular`, { headers });
    return response.json();
  },

  // Get now playing movies
  getNowPlaying: async () => {
    const response = await fetch(`${BASE_URL}/movie/now_playing`, { headers });
    return response.json();
  },

  // Get upcoming movies with pagination support
  getUpcoming: async (page: number = 1) => {
    const response = await fetch(`${BASE_URL}/movie/upcoming?page=${page}`, {
      headers,
    });
    return response.json();
  },

  // Get movie details
  getMovieDetails: async (movieId: number) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}`, { headers });
    return response.json();
  },

  // Get movie credits
  getMovieCredits: async (movieId: number) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits`, {
      headers,
    });
    return response.json();
  },

  // Get movie videos
  getMovieVideos: async (movieId: number) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos`, {
      headers,
    });
    return response.json();
  },

  // Search movies - update: accept page param
  searchMovies: async (query: string, page: number = 1) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(
        query
      )}&page=${page}`,
      { headers }
    );
    return response.json();
  },

  // Get image URL
  getImageUrl: (path: string, size: string = 'w500') => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },
};
