import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./donate.css";

const Donate = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Common fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup-specific fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setAgree(false);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isLogin) {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      if (!agree) {
        alert("You must agree to the terms and conditions.");
        return;
      }
    }

    alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
  };

  return (
    <div className="containerdonate">
      <h2>{isLogin ? "Login to Donate" : "Signup to Donate"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className="check-text">
                I agree to the <a href="#">terms and conditions</a>
              </span>
            </label>
          </>
        )}

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="toggle-link" onClick={handleToggle}>
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
        
      </form>
      <div className="back-home-btn">
  <Link to="/" className="home-link">
    ← Back to Home
  </Link>
</div>

    </div>
  );
};

export default Donate;
