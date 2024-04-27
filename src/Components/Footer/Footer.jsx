import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>QUICK LINKS</h4>
        <ul>
          <li>About Us</li>
          <li>Business Partners</li>
          <li>Editorial</li>
          <li>Current Job Opening</li>
          <li>Events</li>
          <li>FAQ’s</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>PROGRAMS</h4>
        <ul>
          <li>AVY Kochhar Academy</li>
          <li>Coaching & Transformation</li>
          <li>Train The Trainer</li>
          <li>Top Sales Programs</li>
          <li>Softskills Programs</li>
          <li>INTERNATIONAL BUSINESS ADVANTAGE</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Information</h4>
        <p>+91 8802******, +91-8802******</p>
        <p>b*****@ibasearch.com</p>
      </div>
      <div className="footer-section">
        <h4>GET YOUR MEMBERSHIP</h4>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Phone" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea placeholder="Enter your Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="made-with-love">
        Made with love by Partima Jain
      </div>
    </footer>
  );
};

export default Footer;
