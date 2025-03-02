
import axios from "axios";

// Base URL for API requests
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Function to send API requests
export const apiRequest = async (method, endpoint, data = null, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios({
      method,
      url: `${API_BASE_URL}${endpoint}`,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "An error occurred" };
  }
};

// Example API functions

// Sign In
export const signIn = async (email, password) => {
  return apiRequest("POST", "/auth/signin", { email, password });
};

// Sign Up
export const signUp = async (username, email, password) => {
  return apiRequest("POST", "/auth/signup", { username, email, password });
};

// Fetch Dashboard Data
export const getDashboardData = async (token) => {
  return apiRequest("GET", "/dashboard", null, token);
};

// Logout Function
export const logout = () => {
  localStorage.removeItem("auth");
  window.location.href = "/signin";
};

