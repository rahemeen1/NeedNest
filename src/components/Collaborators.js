import React from "react";
import "./Collaborators.css";
import col1 from "./Logos/logo1.jpeg";
import col2 from "./Logos/logo2.jpeg";
import col3 from "./Logos/logo3.jpeg";
import col4 from "./Logos/logo4.jpeg";
import col5 from "./Logos/logo5.jpeg";

const collaboratorsData = [
  {
    img: col1,
    name: "Edhi Foundation",
    desc: "Providing shelter, emergency services, and nationwide humanitarian aid to those in need.",
  },
  {
    img: col2,
    name: "Naiki",
    desc: "Connecting donors with verified cases to deliver essentials directly to deserving individuals.",
  },
  {
    img: col3,
    name: "Alkhidmat Foundation Pakistan",
    desc: "Delivering education, health, and disaster relief services to uplift communities across Pakistan.",
  },
  {
    img: col4,
    name: "Akhuwat",
    desc: "Offering interest-free microfinance to empower people and promote economic inclusion.",
  },
 
];

const Collaborators = () => {
  return (
    <section className="collaborators-section">
      <h2 className="collaborators-heading">Our Collaborators</h2>
      <div className="collaborator-grid">
        {collaboratorsData.map((col, index) => (
          <div className="collaborator-card" key={index}>
            <img src={col.img} alt={col.name} className="collab-img" />
            <h3>{col.name}</h3>
            <p>{col.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
