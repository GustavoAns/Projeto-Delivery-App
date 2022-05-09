import axios from 'axios';
import storage from '../utils/localStorage';

const baseURL = 'http://localhost:3001';
const token = storage.get('token');

const api = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
