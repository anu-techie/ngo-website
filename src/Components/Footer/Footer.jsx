import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Basti Ki Pathshala Foundation</h2>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:info@bastikipathshala.org"><FaEnvelope /></a>
        </div>

        <div className="footer-contact">
          <p>Email: info@bastikipathshala.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Tiruppur, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
