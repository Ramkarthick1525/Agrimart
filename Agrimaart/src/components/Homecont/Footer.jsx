import React from 'react';


const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="brand">🌿 AgroMart</div>
          <p className="tagline">
            Freshness delivered directly from our farms to your doorstep.
          </p>
          <div className="social-icons" aria-label="Social media links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AgroMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
