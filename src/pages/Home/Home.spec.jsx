import { render, screen } from "@testing-library/react";
import { Home } from ".";

jest.mock("echarts-for-react");

describe("Home test implementation", () => {
  it("check if home items renders correct", () => {
    // Necessário para o Header
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Home />);
    const textInHome = screen.getByText(/fidelidade/i);
    expect(textInHome).toBeInTheDocument();

    const moneyWalletComponent = screen.getByText(/carteira - saldo/i);
    expect(moneyWalletComponent).toBeInTheDocument();
  });

  it("check if extract component is rendered", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Home />);
    const extractComponent = screen.getByText(/histórico de transações/i);
    expect(extractComponent).toBeInTheDocument();
  });
});
