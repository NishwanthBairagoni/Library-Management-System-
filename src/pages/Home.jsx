import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Library Management System</h1>
        <p>Manage books, users, and resources efficiently</p>
      </header>

      {/* Action Buttons for login and Register */}
      <div className="home-actions">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>

        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>

      {/* Footer is here */}
      <footer className="home-footer">
        <p>© 2026 Library Management System</p>
      </footer>
    </div>
  );
}

export default Home;
