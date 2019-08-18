export interface Player {
  country: PlayerCountry;
  data: PlayerData;
  firstname: string;
  lastname: string;
  picture: string;
  sex: "M" | "F";
  shortname: string;
}

interface PlayerCountry {
  code: string;
  picture: string;
}

interface PlayerData {
  age: number;
  height: number;
  last: number[];
  points: number;
  rank: number;
  weight: number;
}
