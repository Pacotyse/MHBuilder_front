import axios from 'axios';

// Create an axios instance so the base URL is define here
// When fetching, we only need to specify the route

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: 'https://mhbuilderenzo.up.railway.app',
});
