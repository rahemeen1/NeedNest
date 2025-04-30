import React, { useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@neednest.com" && password === "admin123") {
      alert("Admin Logged In Successfully!");
      // redirect to admin dashboard if needed
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-card">
        <h2>Admin Panel</h2>
        <p className="admin-sub">Only authorized personnel allowed</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Admin Email"
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
          <button type="submit">Login</button>
        </form>
        <div className="admin-back-home">
  <Link to="/" className="admin-home-link">← Back to Home</Link>
</div>

      </div>
    </div>
  );
};

export default AdminLogin;
