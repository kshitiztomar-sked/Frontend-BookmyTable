import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ===== Top Social Section ===== */}
      <section className="footer-social">
        <div className="footer-social-text">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="footer-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </section>

      {/* ===== Footer Links Section ===== */}
      <section className="footer-links">
        <div className="footer-container">
          <div className="footer-row">

            {/* Company Info */}
            {/* <div className="footer-col">
              <h6 className="footer-title">BookMyTable</h6>
              <div className="footer-line"></div>
              <p>
                BookMyTable helps you reserve your favorite dining spot with ease. 
                Discover restaurants, book tables, and experience royal hospitality.
              </p>
            </div> */}

            {/* Products */}
            <div className="footer-col">
              <h6 className="footer-title">Explore</h6>
              <div className="footer-line"></div>
              <p><a href="#">Our Menu</a></p>
              <p><a href="#">Book a Table</a></p>
              <p><a href="#">Reviews</a></p>
              <p><a href="#">Contact Us</a></p>
            </div>

            {/* Useful Links */}
            <div className="footer-col">
              <h6 className="footer-title">Quick Links</h6>
              <div className="footer-line"></div>
              <p><a href="#">Your Account</a></p>
              <p><a href="#">Offers</a></p>
              <p><a href="#">Gift Cards</a></p>
              <p><a href="#">Help</a></p>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h6 className="footer-title">Contact</h6>
              <div className="footer-line"></div>
              <p><FaHome /> Indore, MP, India</p>
              <p><FaEnvelope /> support@bookmytable.com</p>
              <p><FaPhone /> +91 98765 43210</p>
              <p><FaPrint /> +91 98765 43211</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Copyright ===== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>BookMyTable</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
