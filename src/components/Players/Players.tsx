import React from "react";

import useFetchPlayers from "hooks/useFetchPlayers";
import PlayerCard from "./PlayerCard/PlayerCard";
import ErrorMessage from "../Errors/ErrorMessage/ErrorMessage";

const Players: React.FC = () => {
  const [players, error] = useFetchPlayers();

  if (error) {
    return <ErrorMessage>An error occured when fetching players.</ErrorMessage>;
  }

  return players ? (
    <>
      <p className="bg-light border p-3">
        <strong className="text-primary">{players.length}</strong> player(s)
      </p>
      <div className="container mt-4">
        <div className="row">
          {players.map(player => (
            <div className="col-sm-6 col-lg-4 mt-2" key={player.shortname}>
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center p-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Players;
