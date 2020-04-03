import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Checkout from '../containers/Checkout'

afterEach(cleanup);

describe('Checkout page', () => {
  it("O componente do checkout deve renderizar sem travar", () => {
    render(<Checkout />);
  });

})