import { useFetch } from "react-hooks-async";
import { Player } from "../models/player";
import API from "configuration/API";

interface Response {
  players: Player[];
}

const useFetchPlayers = (): [Player[] | null, Error | null] => {
  const { error, result } = useFetch<Response>(API.getPlayers);
  const players = result && result.players;

  return [players, error];
};

export default useFetchPlayers;
