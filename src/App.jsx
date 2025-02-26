import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plants from './pages/Plants';
import ContactUs from './pages/ContactUs';



const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-0 p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/plants" element={<Plants />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
