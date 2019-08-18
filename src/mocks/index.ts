import { Player } from "models/player";

export const getPlayer = (): Player => ({
  firstname: "John",
  lastname: "Doe",
  shortname: "J.DOE",
  sex: "M",
  country: {
    picture: "https://link/to/country/picture",
    code: "FR"
  },
  picture: "https://link/to/picture",
  data: {
    rank: 15,
    points: 238,
    weight: 67555,
    height: 176,
    age: 17,
    last: [1, 0, 1, 1, 1]
  }
});
