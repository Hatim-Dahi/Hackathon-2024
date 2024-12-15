import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GlobalLeaderboard.css";

function GlobalLeaderboard() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch the global test championship data
    axios
      .get("http://localhost:3001/worldwideTestChampionship")
      .then((response) => {
        setTeams(response.data);
      });
  }, []);

  // Filter teams based on the search input
  const filteredTeams = teams.filter((team) =>
    team.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leaderboard-container">
      <div className="global-header">
        <h2>Global Leaderboard</h2>
        <input
          type="text"
          placeholder="Search teams..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Drawn</th>
            <th>No Result</th>
            <th>Points</th>
            <th>PCT</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeams.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.team}</td>
              <td>{team.matches}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.drawn}</td>
              <td>{team.noResult}</td>
              <td>{team.points}</td>
              <td>{team.PCT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GlobalLeaderboard;
