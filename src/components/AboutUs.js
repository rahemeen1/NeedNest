
import React, { useState, useEffect } from "react";
import "./about.css";
import img1 from "./Logos/Rahemeen.jpg";
import img2 from "./Logos/Ali.jpg";
import img3 from "./Logos/Alishba.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Milestones from "./Milestones";
import Collaborators from "./Collaborators";
import Hero from "./Hero";

const AboutUs = () => {
  const [mv, setMv] = useState([]);

 useEffect(() => {
 fetch("https://neednest.free.nf/getmission_vision.php")

  .then(res => {
    console.log("Response status:", res.status);
    return res.text(); // get raw response as text for debugging
  })
  .then(text => {
    console.log("Raw response text:", text);
    try {
      const json = JSON.parse(text);
      console.log("Parsed JSON:", json);
      setMv(json);
    } catch (e) {
      console.error("JSON parse error:", e);
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });

  // rest unchanged

}, []);


  return (
    <div>
      <Navbar />
      <div className="back">
        <Hero />
        <div className="mission-vision-section">
          <div className="mv-flex">
            {mv.length === 0 ? (
              <p>Loading mission and vision...</p>
            ) : (
              mv.map((item, i) => (
                <div
                  key={item.id}
                  className={`mv-block animate-fade ${i === 1 ? "delay-1" : ""}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <Milestones section="Milestone" />
        <div className="h">
          <h2>Team Behind NeedNest</h2>
        </div>
        <div className="text">
          <p>
            The team behind NeedNest is a passionate group of three university
            students who came together with a shared vision to make a real
            difference. Driven by empathy and a sense of social responsibility,
            they have built this platform to streamline the process of donations
            and support those in need.
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
                  <br />
                  Executive Director
                </p>
              </div>
            </div>
          </div>
        </div>
        <Collaborators />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
