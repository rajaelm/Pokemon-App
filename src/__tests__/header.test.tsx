/**
 * @jest-environment jsdom
 */
import * as React from "react";
import '@testing-library/jest-dom/extend-expect'

import {  screen, render} from "@testing-library/react";
import Header from "../components/header";
import "@testing-library/jest-dom"

describe('Header', () => {
  it('Title text and toolbar' ,() =>{
    render(<Header />)
    expect(screen.getByTestId('title')).toHaveTextContent('POKEMON APP');
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });
});
