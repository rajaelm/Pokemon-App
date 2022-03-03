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
  data:[
   
        {name: "pokemon"},
        {base_stat: "45"},
        {
          stat: {
            name: "hp"}
        }
     
]
};
describe("render Pokemon stats", () => {
  beforeEach(() => {
    mockedModule.mockImplementation(() => ()=>({
      data: JSON.parse(JSON.stringify(mockeddata)),
      isLoading: false,
      isError: false, }))
    }) 

  it("get stat of a pokemon", () => {
    render(<Pokemon id={id} />);
    //expect(screen.findByTestId('name')).toBeInTheDocument();
    //expect(screen.findByTestId('name')).toHaveTextContent("pokemon")
  });
});
