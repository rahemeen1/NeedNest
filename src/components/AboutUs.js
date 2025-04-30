import React from "react";
import "./about.css";
import img1 from "./Logos/Rahemeen.jpg";
import img2 from "./Logos/Ali.jpg";
import img3 from "./Logos/Alishba.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Milestones from "./Milestones";
import Collaborators from "./Collaborators"
import Hero from "./Hero";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="back">
        <Hero/>
        <div className="mission-vision-section">
  
  <div className="mv-flex">
    <div className="mv-block animate-fade">
      <h3>Mission</h3>
      <p>
        To bridge the gap between generosity and need by enabling secure,
        transparent, and compassionate donations.
      </p>
    </div>
    <div className="mv-block animate-fade delay-1">
      <h3>Vision</h3>
      <p>
        To create a world where everyone has access to support through
        community-driven giving and responsible contributions.
      </p>
    </div>
  </div>
</div>

      <Milestones section="Milestone" />
        <div className="h">
          <h2>Team Behind NeedNest</h2>
        </div>
        <div className="text">
          <p>
          The team behind NeedNest is a passionate group of three university students who came together with a shared vision to make a real difference. Driven by empathy and a sense of social responsibility, they have built this platform to streamline the process of donations and support those in need. 
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img1} alt="team" />
              </div>
              <div className="card-back">
                <p>
                  <strong>Rahemeen Kamran</strong> Executive Director
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img2} alt="team" />
              </div>
              <div className="card-back">
                <p>
                <strong>Alishba Nadeem</strong> Executive Director
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img3} alt="team" />
              </div>
              <div className="card-back">
                <p>
                <strong>Alishba Malik</strong> 
                <p>Executive Director</p>
                </p>
              </div>
            </div>
          </div>

       
        </div>
        <Collaborators/>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
