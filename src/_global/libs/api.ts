import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.101.254:3333',
});
