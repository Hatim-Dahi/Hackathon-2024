import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GlobalLeaderboard.css";
function RegionalLeaderboard() {
  const [region, setRegion] = useState("IN");
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/playerStatistics").then((response) => {
      setPlayers(response.data.filter((player) => player.region === region));
    });
  }, [region]);

  // Filter players based on the search input
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leaderboard-container">
      <div className="global-header">
        <h2>Regional Leaderboard</h2>

        <div className="region-selector">
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="IN">India</option>
            <option value="AUS">Australia</option>
            <option value="PAK">Pakistan</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Total Runs</th>
            <th>Batting Average</th>
            <th>Total Wickets</th>
            <th>Total Matches</th>
            <th>Total Innings</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <tr key={player.playerId}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.totalRuns}</td>
                <td>{player.battingAverage}</td>
                <td>{player.totalWickets}</td>
                <td>{player.totalMatches}</td>
                <td>{player.totalInnings}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                No data available for this team.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RegionalLeaderboard;
