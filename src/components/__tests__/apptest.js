import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App'

afterEach(cleanup);

describe('<App />', () => {
  it("O aplicativo deve renderizar sem travar", () => {
    render(<App />);
  });
})