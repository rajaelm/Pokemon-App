/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import "@testing-library/jest-dom/extend-expect";
 
 import { screen, render } from "@testing-library/react";
 import "@testing-library/jest-dom";
 import Pokemon from "../components/pokemon";
 import getpokedetails from "../components/getpokedetails";
 
 
 
 jest.mock("../components/getpokedetails") 
 
 const mockedModule = getpokedetails as unknown as jest.Mock<typeof getpokedetails>;
 const id = 1;
 const mockeddata = {
     data: {
         name: "pokemon",
         "stats":[
           {
              "base_stat":45,
              "effort":0,
              "stat":{
                 "name":"hp",
                 "url":"https://pokeapi.co/api/v2/stat/1/"
              }
           },
           {
              "base_stat":49,
              "effort":0,
              "stat":{
                 "name":"attack",
                 "url":"https://pokeapi.co/api/v2/stat/2/"
              }
           },
           {
              "base_stat":49,
              "effort":0,
              "stat":{
                 "name":"defense",
                 "url":"https://pokeapi.co/api/v2/stat/3/"
              }
           },
           {
              "base_stat":65,
              "effort":1,
              "stat":{
                 "name":"special-attack",
                 "url":"https://pokeapi.co/api/v2/stat/4/"
              }
           },
           {
              "base_stat":65,
              "effort":0,
              "stat":{
                 "name":"special-defense",
                 "url":"https://pokeapi.co/api/v2/stat/5/"
              }
           }
         ]
     }
 };
 describe("render Pokemon stats", () => {
   beforeEach(() => {
     mockedModule.mockImplementation( ()=>({
       data:  mockeddata,
       isLoading: false,
       isError: false, }))
     }) 
 
   it("get stat of a pokemon", () => {
     const {debug} = render(<Pokemon id={id} />);
     debug()
     expect(screen.getByTestId('name')).toBeTruthy();
     expect(screen.getByTestId('name')).toHaveTextContent("pokemon")
   });
 });
 