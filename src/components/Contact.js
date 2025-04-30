import React from "react";
import "./contact.css";
import Footer from "./Footer";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="back">
        <div className="hero">
          <div className="hero.text">
            <h1>NeedNest</h1>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="contact-area">
          <div className="map">
            <div className="map-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.496461796169!2d74.3405255!3d31.5379871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ebcc18c7bf%3A0x1c311b2dddb7ab8f!2sKinnaird%20College%20For%20Women%20University!5e0!3m2!1sen!2s!4v1729690252453!5m2!1sen!2s"
                title="Google Map"
                style={{ border: 0, width: "100%", height: "400px" }} // Adjust height and width as needed
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact">
            <div className="section-heading ">
              <h2>Contact Info</h2>
              <p>Feel free to contact us!</p>
            </div>

            <h5>neednest@gmail.com</h5>
            <h4>93-Jail Road Lahore, 54000</h4>
            <div className="section-heading ">
              <p>For regular updates follow us!</p>
            </div>
            <a
              href="https://www.instagram.com/ieee_kinnaird_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram
                style={{
                  color: "darkgreen",
                  margin: "0 10px",
                  fontSize: "24px",
                }}
              />
            </a>
            <a
              href="https://www.facebook.com/IEEEKINNAIRD/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook
                style={{
                  color: "darkgreen",
                  margin: "0 10px",
                  fontSize: "24px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ieee-kinnaird-student-branch-03a96b269/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin
                style={{
                  color: "darkgreen",
                  margin: "0 10px",
                  fontSize: "24px",
                }}
              />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
