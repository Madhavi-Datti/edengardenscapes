import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer-color text-light py-5">
      <div className="container">
        <div className="row align-items-start">
          {/* Logo */}
          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
          <h5 className="mb-4 px-4 py-0">Eden GardenScapes</h5>
          <div className="align-items-center align-items-lg-start"> <img src="/images/logo_transparent.png" alt="My Logo" className="footer-logo" /></div>
           
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <h5 className="mb-4">Contact Info</h5>
            <div className="d-flex flex-column gap-3 align-items-center align-items-lg-start">
              <div className="d-flex align-items-center">
                <Mail size={18} className="me-2" />
                <span>edengardenscapes@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <Phone size={18} className="me-2" />
                <span>+91 8184848680, +91 8184848681</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={18} className="me-2" />
                <span>Hyderabad, Telangana 500085</span>
              </div>
              <div className="d-flex align-items-center">
                <MessageCircle size={18} className="me-2" />
                <span>8184848680</span>
              </div>
              <div className="d-flex align-items-center">
                <Clock size={18} className="me-2" />
                <span>Mon-Fri, 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 align-items-center align-items-lg-start">
              <li>
                <Link to="/services" className="quick-link">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="quick-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/plants" className="quick-link">
                  Plant Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="quick-link">
                  Get a Quote
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <Link
                to="https://www.instagram.com/eden_gardenscapes?igsh=cTh5dDVldGZwcXI2"
                className="social-link instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61553171338482"
                className="social-link facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link to="https://www.youtube.com/@Edengardenscapes" className="social-link youtube">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-top border-white pt-4 mt-4">
          <p className="text-center text-light mb-0">
            © {new Date().getFullYear()} Eden GardenScapes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
