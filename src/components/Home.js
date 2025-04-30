import React from "react";
import c1 from "./Logos/c1.jpg";
import c2 from "./Logos/c2.jpg";
import c3 from "./Logos/c3.jpg";
import { FaCheck } from "react-icons/fa";
import "../components/home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import CounterSection from "./CounterSection";
import HeroCarousel from "../HeroCarousel";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroCarousel />
      </div>
       
      <div className="new">
        <section className="about-us-area">
          <div className="container1">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-container">
                <div className="about-text-box mb-100">
                  <div className="section-heading">
                    <h2 className="heading-title">
                      What We Provide at NeedNest
                    </h2>
                   
                  </div>
                  <p className="about-description">
                    <strong>NeedNest</strong> is a compassionate digital
                    platform designed to connect generous donors with
                    individuals and families in need. Whether it's clothing,
                    food, household items, electronics, or financial support,
                    NeedNest offers a simple and secure way to give and receive.
                    Users can register, donate items or funds based on specific
                    causes like <strong>Education</strong>,{" "}
                    <strong>Healthcare</strong>, or <strong>Shelter</strong>,
                    and track their donations in real time.
                  </p>
                  <div className="about-key-points">
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Easy and Secure Donations
                    </h6>
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Verified Requests through Admin Approval
                    </h6>
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Category-Based Giving (Food, Education etc.)
                    </h6>
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Promoting Empathy and Community Support
                    </h6>
                  </div>
                </div>
              </div>
              {/* WHAT WE PROVIDE SIDE IMAGES */}
              <div className="col-12 col-lg-6">
                <div className="about-thumbnail homepage mb-100">
                  <div className="first-img wow fadeInUp">
                    <img src={c2} alt="Image 1" />
                  </div>
                  <div className="second-img wow fadeInUp">
                    <img src={c1} alt="Image 2" />
                  </div>
                  <div className="third-img wow fadeInUp">
                    <img src={c3} alt="Image 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    

      <section className="core-values-section">
        <h2 className="centre">CORE VALUES</h2>
        <div className="core-values-content">
          <div className="core-values-row">
            <div className="core-value-card animate-slide-up delay-1">
              <h4>Compassion</h4>
              <p>Every donation is rooted in empathy and kindness.</p>
            </div>
            <div className="core-value-card animate-slide-up delay-2">
              <h4>Transparency</h4>
              <p>Clear processes and honest communication at every step.</p>
            </div>
            <div className="core-value-card animate-slide-up delay-3">
              <h4>Empowerment</h4>
              <p>
                We empower donors and recipients through dignity and respect.
              </p>
            </div>
            <div className="core-value-card animate-slide-up delay-4">
              <h4>Innovation</h4>
              <p>Using technology to drive meaningful social change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Images*/}
      <Gallery />
      <CounterSection />
      {/* Testimonial */}
      <Testimonial />
      {/* Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
