import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import A from "../images/favicon.png";
import "./Footer.css";

const Footer = () => {

    let date = new Date()
  let year = date.getFullYear()
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>How it works</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Testimonials</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Investors</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Submit Video</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Ambassadors</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Agency</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Influencer</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Instagram</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Facebook</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Youtube</Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Twitter</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <h1 className="title" style={{ fontSize: "40px" }}>
                K R{" "}
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    className="logo"
                    src={A}
                    alt="Logo"
                    style={{ width: "45px", height: "45px" }}
                  />
                </Link>
                T E
              </h1>
            </div>
            <h3 className="website-rights">
              © Krate {year}. All rights reserved.
            </h3>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to={
                  "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
                }
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
