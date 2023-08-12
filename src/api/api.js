import axios from 'axios';

// Define a base URL for your API
const baseURL = 'https://cc-validator-backend.onrender.com'; // Replace with your actual API URL

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
  headers: {
    // You can set common headers here, like authorization token
    // 'Authorization': 'Bearer YourAuthToken',
    'Content-Type': 'application/json',
  },
});

// Define your API functions
export const signIn = async (data) => {
  try {
    // Use the 'api' instance to make a GET request
    const response = await api.post(`/signIn`,data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (data) => {
  try {
    // Use the 'api' instance to make a POST request
    const response = await api.post('/signUp', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions as needed (PUT, DELETE, etc.)
