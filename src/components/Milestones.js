import React from "react";
import "./milestones.css";
import signup from "./Logos/share.png";
import choose from "./Logos/work.png";
import submit from "./Logos/code.png";
import track from "./Logos/play.png";

const Milestones = () => {
  return (
    <div>
      <div>
        <h2 className="centre" style={{ marginBottom: "10px" , color: "darkgreen"}}>
          How it Works?
        </h2>
      </div>

      <section className="milestone">
        <div className="container2">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="section-heading text-center">
                <div className="text2">
                  NeedNest simplifies the donation journey for both donors and
                  recipients. From creating an account to making an impact, every
                  step is designed to be easy, transparent, and meaningful. Here’s
                  how you can contribute and make a difference:
                </div>
              </div>
            </div>
          </div>

          <div className="milestones-row">
            <div className="single-fact">
              <img src={signup} alt="Sign Up or Log In" />
              <h2>Step 1: Sign Up</h2>
              <p>
                Create an account or log in to begin your donation journey.
              </p>
            </div>

            <div className="single-fact">
              <img src={choose} alt="Choose Donation Type" />
              <h2>Step 2: Choose</h2>
              <p>
                Select what you want to donate — money or personal items.
              </p>
            </div>

            <div className="single-fact">
              <img src={submit} alt="Submit Donation" />
              <h2>Step 3: Submit</h2>
              <p>
                Enter payment details or upload item info and submit your donation.
              </p>
            </div>

            <div className="single-fact">
              <img src={track} alt="Track Donation" />
              <h2>Step 4: Track</h2>
              <p>
                Monitor the status of your donation via your personal dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
