import React from "react";
import CountUp from "react-countup";
import "./counter.css";

const stats = [
  { label: "Donations", value: 100 },
  { label: "Collaborators", value: 10 },
  { label: "Happy Recipients", value: 50 },
  { label: "Events Organized", value: 5 },
];

const CounterSection = () => {
  return (
    <div className="counter-background">
      <div className="counter-overlay">
        <div className="counter-heading-container">
          <div className="line-"></div>
          <h2 className="counter-heading">What Makes NeedNest Unique</h2>
          <p className="counter-description">
            NeedNest is more than just a donation platform — it’s a bridge
            between compassion and real change. We connect donors with authentic
            stories and impactful causes, ensuring transparency and meaningful
            engagement. Whether it’s funding education, donating essentials, or
            organizing support events, every contribution is a step toward a
            more connected, caring community.
          </p>
        </div>

        <div className="counter-section">
          {stats.map((stat, index) => (
            <div className="counter-box" key={index}>
              <h2>
                <CountUp end={stat.value} duration={20} />+
              </h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
