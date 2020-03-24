import React from 'react';
import { render, cleanup } from "react-testing-library";
import App from '../App'

afterEach(cleanup)

describe('<App />', () => {
  it("O aplicativo deve renderizar sem travar", () => {
    render(<App />);
  });
})