import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/contact.jsx';
import Brandstory from "./Component/Brandstory.jsx";
// import Resume from "./Component/Resume.jsx";
import Work from "./Component/Work.jsx"

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Brandstory" element={<Brandstory />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/Work" element={<Work />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
