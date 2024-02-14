import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/style/output.css";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
