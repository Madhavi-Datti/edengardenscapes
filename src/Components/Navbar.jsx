import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone} from 'lucide-react';
import logo from '../assets/logo.png';
import '../index.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="My Logo" className="my-logo me-1" />
          <span className="fw-bold " style={{ color: "#48A813" }}>EdenGardenscapes</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: '#48A813' }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plants">Plants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
            <Link className="btn btn-custom ms-lg-2 rounded-pill" to="tel:+9281455780">
            <Phone size={17} className="me-1" /> Call now: +91 9281455780
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar