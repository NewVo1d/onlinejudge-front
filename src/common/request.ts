/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';
import { getToken } from './token';

export const request = axios.create({
  baseURL: 'http://127.0.0.1:7001/api'
});

request.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers!['authorization'] = 'Bearer ' + token;
  }
  return config;
});

request.interceptors.response.use((res) => {
  if (res.data.code === 50000) {
    throw Error(res.data.msg);
  }
  return res.data.data;
});
