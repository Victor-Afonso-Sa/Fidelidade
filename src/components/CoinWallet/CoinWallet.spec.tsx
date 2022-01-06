import { fireEvent, render, screen } from "@testing-library/react";
import { CoinWallet } from ".";

jest.mock("../../utils/formatCurrencyPtBr", () => {
  return {
    formatCurrencyPtBr: jest.fn(() => "R$ 1,00"),
  };
});

describe("CoinWallet component", () => {
  it("should renders correctly", () => {
    render(<CoinWallet />);

    expect(
      screen.getByRole("heading", {
        name: /moedas - saldo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /resgatar/i,
      })
    ).toBeInTheDocument();
  });

  it("should renders with closed modal", () => {
    render(<CoinWallet />);

    expect(screen.queryByText(/finalizar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).not.toBeInTheDocument();
  });

  it("should open modal", () => {
    render(<CoinWallet />);

    expect(screen.queryByText(/finalizar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).not.toBeInTheDocument();

    const openModalButton = screen.getByRole("button", {
      name: /resgatar/i,
    });

    fireEvent.click(openModalButton);

    expect(screen.queryByText(/finalizar/i)).toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).toBeInTheDocument();
  });
});
