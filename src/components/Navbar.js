import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../components/Logos/kc.png";
import "./nav.css";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-container">
        <img src={logo1} className="logo1" alt="Logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link className="links" to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
       <li>
  <a className="btn donate-btn" href="https://neednest.free.nf/signup.php" target="_blank" rel="noopener noreferrer">
    Donate Now
  </a>
</li>
<li>
  <a className="btn admin-btn" href="https://neednest.free.nf/adminlogin.php" target="_blank" rel="noopener noreferrer">
    Admin Login
  </a>
</li>


      </ul>

      <div className="sidemenu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
