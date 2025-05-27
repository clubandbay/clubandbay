import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column footer-logo">
          <img src="/logo.jpg" alt="logo" />
          <div className="social-icons">
            <Link to="https://facebook.com" target="_blank" className='social-circle' rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link to="https://x.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label='Twitter'>
                  <img
                    src="/twitter_icon.png"
                    alt="X (Twitter)"
                    className='w-5 h-5 object-contain'
                  />
            </Link>
            <Link to="https://instagram.com" target="_blank" className='social-circle' rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Subscriptions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Important Links</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li><FaPhoneAlt /> <a href="tel:+919876543210">+91 9876543210</a></li>
            <li><FaEnvelope /> <a href="mailto:food@gmail.com">food@gmail.com</a></li>
            <li><FaMapMarkerAlt /> #Pune, Maharashtra</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Licence</h4>
          <ul>
            <li>FSSAI & MSME</li>
            <li>Powered by My Agro Food Chain (MFC), a registered FSSAI & MSME enterprise</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Powered by – My Agro Food Chain (MFC)
      </div>
    </footer>
  );
};

export default Footer;
