import React from "react";
import "./HeroSection.css";
import player from "../bg-themes/cricketplayer.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to the Gaming Leaderboard System</h1>
        <p>Track your progress, compete with others, and climb the ranks!</p>
        <Link to="/global">
          <button className="cta-button">WTC Points</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={player} alt="Gaming Leaderboard" />
      </div>
    </div>
  );
}

export default HeroSection;
