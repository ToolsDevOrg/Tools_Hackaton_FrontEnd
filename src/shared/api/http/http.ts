import axios from "axios";
// import { getToken } from "../token/Token";

export const http = axios.create({
  baseURL: 'http://172.20.10.11:8000',
})

// http.interceptors.request.use(
//   async (config) => {
//     const token = await getToken();
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );


// http.interceptors.response.use(
//   response => response,
//   (error) => {
//     if (error.response) {
//       const errorMessage = error.response.data.detail || `Server error: ${error.response.status}`;
//       console.error(errorMessage);
//       return Promise.reject(new Error(errorMessage));
//     } else {
//       console.error('An unexpected error occurred:', error);
//       return Promise.reject(new Error('An unexpected error occurred'));
//     }
//   }
// );