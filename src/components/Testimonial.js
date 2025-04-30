import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import patternBg from "./Logos/pattern.png";

const testimonials = [
  {
    text: `Supporting NeedNest has been one of the most fulfilling experiences of my life. The platform makes it incredibly easy to donate to causes that truly matter — whether it's helping a student go back to school or providing basic household items to a struggling family. I love being part of something that directly impacts lives with honesty and care.`,
    author: "Hassan Raza",
    role: "Long-term Donor & Supporter",
  },
  {
    text: `I came across NeedNest while looking for a way to give back to the community, and it turned out to be the perfect platform. The transparency in how donations are used and the real-time updates gave me confidence that my contributions were making a real difference. I'm proud to support a platform that turns compassion into action.`,
    author: "Amna Tariq",
    role: "Active Monthly Contributor",
  },
  {
    text: `What I admire most about NeedNest is how personal and human it feels. It's not just about giving — it's about connecting with stories, with lives. I once donated a laptop to a student preparing for board exams, and seeing the impact it had reminded me how even small actions can change the course of someone's future.`,
    author: "Faraz Malik",
    role: "Occasional Donor",
  },
  {
    text: `NeedNest isn’t just a donation platform — it’s a movement of empathy and empowerment. The interface is smooth, the causes are well-verified, and the team behind it is genuinely committed to creating social change. Every time I donate, I feel like I’m contributing to a brighter, more caring world.`,
    author: "Meher Fatima",
    role: "Verified Donor & Advocate",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      <div className="container1">
        <div className="section-heading text-center">
          <div className="line-"></div>
          <h2 className="headingtest">What Customers Say</h2>
        </div>

        <div className="testimonial-box">
          <div
            className="testimonial-slide"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx}>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h6 className="testimonial-author">
                  {testimonial.author}, <span>{testimonial.role}</span>
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
