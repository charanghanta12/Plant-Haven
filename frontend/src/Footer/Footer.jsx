import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Plant Haven</h3>
          <p style={{ marginRight: '5px' }}>At Plant Haven, we are passionate about bringing nature into your home. Our mission is to provide you with the highest quality plants and accessories to create your own green oasis.</p>
        </div>
        <div className="footer-section expre"  >
          <h3>Explore</h3>
          <ul>
            <li><a className="footer-link" href="#">Shop Plants</a></li>
            <li><a className="footer-link" href="#">Plant Care Tips</a></li>
            <li><a className="footer-link" href="#">About Us</a></li>
            <li><a className="footer-link" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Green Street</p>
          <p>Plant City, PL 12345</p>
          <p>Email: info@planthaven.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Plant Haven. All rights reserved.</p>
        <div className="footer-social">
          <span className="fab fa-facebook-f"></span>
          <span className="fab fa-twitter"></span>
          <span className="fab fa-instagram"></span>
          <span className="fab fa-pinterest"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
