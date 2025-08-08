import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import patternBg from "./Logos/pattern.png";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch from backend
  useEffect(() => {
  fetch("https://neednest.free.nf/getTestimonials.php")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Testimonials:", data); // Debug log
      if (data.success) {
        setTestimonials(data.testimonials);
      } else {
        console.error("Data fetch failed:", data);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);


  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return <p>Loading testimonials...</p>;

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
            style={{ transform: `translateX(-${index * 100}%)`, display: "flex", transition: "transform 0.5s ease" }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ minWidth: "100%" }}>
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
