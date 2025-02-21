import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

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
