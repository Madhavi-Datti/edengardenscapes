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
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
  <img src={logo} alt="My Logo" style={{ height: "60px" }} />
  <span 
    className="fw-bold" 
    style={{ 
      color: "#48A813",
      fontFamily:"Playfair Display, serif",
      fontSize: "1.6rem",
      paddingTop: "10px"
    }}
  >
    Eden Gardenscapes
  </span>
        </Link>  
        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: "2px solid #9cf120",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          {isOpen ? <X size={24} style={{ color: "#9cf120" }} /> : <Menu size={24} style={{ color: "#9cf120" }} />}

        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ paddingTop: "10px" }}>
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: '#48A813' }} to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="plantsDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Plants
              </a>
              <ul className="dropdown-menu" aria-labelledby="plantsDropdown">
                <li>
                  <Link className="dropdown-item" to="/plants" onClick={() => setIsOpen(false)}>
                    Outdoor Plants
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plants" onClick={() => setIsOpen(false)}>
                    Indoor Plants
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plants" onClick={() => setIsOpen(false)}>
                    Flowering Plants
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plants" onClick={() => setIsOpen(false)}>
                    Avenue Plants
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plants" onClick={() => setIsOpen(false)}>
                    Gifting Plants
                  </Link>
                </li>
              </ul>
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
