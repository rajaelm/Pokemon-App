/**
 * @jest-environment jsdom
 */
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render,screen} from "@testing-library/react";
import PokemonList from "../components/pokemonList";
describe ('pokemonList', () => {
 describe('while loading',() => {
    it.todo("render a loader");
  })
  describe('with an error', ()=>{
    it.todo("render an error message");
  })
})

