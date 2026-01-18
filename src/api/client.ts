import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (apiKey) {
    config.params = {
      ...config.params,
      api_key: apiKey,
    };
  }

  return config;
});
