import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Project from "./Pages/Project/Project";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/react-portofolio/" element={<Homepage />} />
          <Route path="/react-portofolio/project/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
