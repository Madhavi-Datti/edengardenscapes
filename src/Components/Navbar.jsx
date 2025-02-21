import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-end" to="/">
          <img src={logo} alt="My Logo" className="my-logo" />
          <span className="fw-bold" style={{ color: "#48A813" }}>EdenGardenscapes</span>
        </Link>  
        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: "2px solid #48A813",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          {isOpen ? <X className="text-color" size={24} /> : <Menu className="text-color" size={24} />}
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: '#48A813' }} to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plants" onClick={() => setIsOpen(false)}>Plants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-custom ms-lg-2 rounded-pill" to="tel:9281455780" onClick={() => setIsOpen(false)}>
                <Phone size={17} className="me-1" /> Call now: 9281455780
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
