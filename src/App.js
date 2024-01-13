import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components:
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

// Styles:
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
