import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes> 
  );
};

export default App;
