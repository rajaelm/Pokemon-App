/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import "@testing-library/jest-dom/extend-expect";
 
 import { screen, render } from "@testing-library/react";
 import "@testing-library/jest-dom";
 import Pokemon from "../components/pokemon";
 import getpokedetails from "../components/getpokedetails";
import { mockeddata } from "../mock/mockdata";

 
 
 jest.mock("../components/getpokedetails") 
 
 const mockedModule = getpokedetails as unknown as jest.Mock<typeof getpokedetails>;
 const id = 1;
 
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
 
describe('when an error', ()=>{
  beforeEach(() => {
    mockedModule.mockImplementation( ()=>({
      data:  undefined,
      isLoading: false,
      isError: true, }))
    }) 
    it("Load error page", () => {
      const {debug} = render(<Pokemon id={id} />);
      debug()
      expect(screen.getByTestId('error')).toBeTruthy();
    });
})

describe('while loading ', ()=>{
  beforeEach(() => {
    mockedModule.mockImplementation( ()=>({
      data:  undefined,
      isLoading: true,
      isError: false, }))
    }) 
    it("Load loading page", () => {
      const {debug} = render(<Pokemon id={id} />);
      debug()
      expect(screen.getByTestId('loading')).toBeTruthy();
    });
})
 