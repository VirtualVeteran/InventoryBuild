import axios from 'axios';

// Create an Axios instance with base configuration
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust base URL to match your server's address
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include authentication token if needed
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Replace with your token storage logic
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
