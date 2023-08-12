import axios from 'axios';

// Define a base URL for your API
const baseURL = 'https://cc-validator-backend.onrender.com'; // Replace with your actual API URL

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to retrieve authToken from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Function to set the Authorization header with the authToken
const setAuthTokenHeader = () => {
  const authToken = getAuthToken();
  if (authToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Set the Authorization header initially
setAuthTokenHeader();

// Listen to changes in localStorage and update the Authorization header
window.addEventListener('storage', (event) => {
  if (event.key === 'authToken') {
    setAuthTokenHeader();
  }
});

// Define your API functions
export const signIn = async (data) => {
  try {
    // Use the 'api' instance to make a POST request
    const response = await api.post('/signIn', data);
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

export const validateCard = async (data) => {
  try {
    // Use the 'api' instance to make a POST request
    const response = await api.post('/validate', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getValidatedCards = async (data) => {
  try {
    // Use the 'api' instance to make a POST request
    const response = await api.get('/getValidatedCards');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions as needed (PUT, DELETE, etc.)
