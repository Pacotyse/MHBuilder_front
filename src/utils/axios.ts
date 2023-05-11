import axios from 'axios';

// Create an axios instance so the base URL is define here
// When fetching, we only need to specify the route

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: 'https://mhbuilderenzo.up.railway.app',
=======
  baseURL: 'https://test-production-f834.up.railway.app/',
>>>>>>> 2ac7987 (build: add axios and config baseURL)
});
