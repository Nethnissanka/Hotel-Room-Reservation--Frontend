import axios from 'axios';

// Create an instance of axios with a default base URL
const axiosInstance = axios.create({
  baseURL: 'https://hotel-room-reservation-backend.onrender.com', // Adjust to your backend's address
});

// Optionally, you can add interceptors for request/response
axiosInstance.interceptors.request.use((config) => {
  // You can add custom headers here if needed
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Handle global errors here
  return Promise.reject(error);
});

export default axiosInstance;
