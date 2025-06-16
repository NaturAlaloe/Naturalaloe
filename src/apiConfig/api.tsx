import axios from 'axios';

const api = axios.create({
  baseURL: 'https://naturalaloebackend-production.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;