/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom/extend-expect";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { screen, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import PokemonCard from "../components/pokemonCard";
const data = {
  result : {
    name: "pokemon",
    url: "https://pokeapi.co/api/v2/pokemon/3",
  },
};
describe("render Pokemon stat", () => {
  it("Title text and toolbar", () => {
    //render(<PokemonCard data={data} />);
  });
});
