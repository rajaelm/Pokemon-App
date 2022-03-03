/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom/extend-expect";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { screen, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import PokemonCard from "../components/pokemonCard";
import { mockednames } from "../mock/mockdata";

describe("render Pokemon stat", () => {
  it("render without crashing", () => {
    
    const {debug}= render(<PokemonCard data={mockednames} />);
    debug();
    expect(screen.getAllByTestId('pokename')).toBeTruthy();
  });
});
