import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalLeaderboard from "./components/GlobalLeaderboard";
import RegionalLeaderboard from "./components/RegionalLeaderboard";
import PlayerProfile from "./components/PlayerProfile";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            backgroundColor: "#282c34",
            padding: "1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", margin: 0 }}>
            Gaming Leaderboard System
          </h1>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "1em",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/global"
                style={{ color: "white", textDecoration: "none" }}
              >
                Global Leaderboard
              </Link>
            </li>
            <li>
              <Link
                to="/regional"
                style={{ color: "white", textDecoration: "none" }}
              >
                Regional Leaderboards
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/global" element={<GlobalLeaderboard />} />
          <Route path="/regional" element={<RegionalLeaderboard />} />
          <Route path="/profile/:id" element={<PlayerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
