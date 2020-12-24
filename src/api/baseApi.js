import axios from 'axios';

import config from '../config/config.json';

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
});
