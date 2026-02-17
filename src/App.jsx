import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Aboutme />} />
      </Routes>
    </Router>
  );
}

export default App;
