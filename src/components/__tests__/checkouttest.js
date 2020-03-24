import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from "react-testing-library";
import Checkout from '../containers/Checkout'

afterEach(cleanup)

describe('Checkout page', () => {
  it("O componente do checkout deve renderizar sem travar", () => {
    render(<Checkout />);
  });
  it("A página deve renderizar com o cabeçalho Checkout", () => {
    const { getByText } =  render(<Checkout />);
    const headerEl = getByText("Checkout");
    expect(headerEl).toBeDefined()
  });
})