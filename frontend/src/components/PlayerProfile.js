import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PlayerProfile() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/players/${id}`).then((response) => {
      setPlayer(response.data);
    });
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}'s Profile</h2>
      <p>Region: {player.region}</p>
      <p>Total Games Played: {player.gamesPlayed}</p>
    </div>
  );
}

export default PlayerProfile;
