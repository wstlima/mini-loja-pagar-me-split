import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Summary from '../containers/Summary'

afterEach(cleanup);

describe('Summary', () => {
  it("O componente do Summary deve renderizar sem travar", () => {
    render(<Summary />);
  });

})