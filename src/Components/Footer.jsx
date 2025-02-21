import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Youtube} from 'lucide-react';
import '../index.css'

const Footer = () => {
  return (
    <footer className="footer-color text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <h5 className="mb-4">EdenGardenScapes</h5>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <Link to="https://www.instagram.com/eden_gardenscapes?igsh=cTh5dDVldGZwcXI2" className="text-light"><Instagram size={20} /></Link>
              <Link to="#" className="text-light"><Linkedin size={20} /></Link>
              <Link to="https://www.facebook.com/profile.php?id=61553171338482" className="text-light"><Facebook size={20} /></Link>
              <Link to="#" className="text-light"><Twitter size={20} /></Link>
              <Link to="#" className="text-light"><Youtube size={20} /></Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <h5 className="mb-4">Contact Info</h5>
            <div className="d-flex flex-column gap-2 align-items-center align-items-lg-start">
              <div className="d-flex align-items-center">
                <Mail size={18} className="me-2" />
                <span>edengardenscapes@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <Phone size={18} className="me-2" />
                <span>+91 9392947780, +91 9281455780</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={18} className="me-2" />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="d-flex align-items-center">
                <MessageCircle size={18} className="me-2" />
                <span>9392947780</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 align-items-center align-items-lg-start">
              <li><Link to="/services" className="text-decoration-none link-color">Our Services</Link></li>
              <li><Link to="/about" className="text-decoration-none link-color">About Us</Link></li>
              <li><Link to="/plants" className="text-decoration-none link-color">Plant Gallery</Link></li>
              <li><Link to="/contact" className="text-decoration-none link-color">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-white pt-4 mt-4">
          <p className="text-center text-light mb-0">
            © {new Date().getFullYear()} EdenGardenScapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
