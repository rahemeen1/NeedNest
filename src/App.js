import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (

    <Router>
      <div>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
