/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.219.104:2021/api' || 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
});

export const Api = {
  BASE_URL: 'http://192.168.219.104:2021/api' || 'https://jsonplaceholder.typicode.com',
};
