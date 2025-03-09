import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/auth/Signup";
import SignIn from "./components/auth/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./components/dashboard/Tasks";
import Analytics from "./components/dashboard/Analytics";
import CalendarComponent from "./components/dashboard/CalendarComponent";
import ExportReport from "./components/dashboard/ExportReport";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("auth") ? children : <Navigate to="/signin" />;
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
        <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
        <Route path="/calendar" element={<PrivateRoute><CalendarComponent /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><ExportReport /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
