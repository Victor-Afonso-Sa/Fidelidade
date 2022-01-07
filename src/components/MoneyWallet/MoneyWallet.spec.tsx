import { fireEvent, render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";

import { MoneyWallet } from ".";
import { useWallet } from "../../hooks/useWallet";

jest.mock("../../hooks/useWallet");

describe("MoneyWallet Component", () => {
  it("renders correctly", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValueOnce({
      moneyWallet: {
        amount: 0,
        walletTypeId: 1,
        amountFormatted: "R$ 0,00",
      },
    } as any);

    render(<MoneyWallet />);

    expect(screen.getByText("Carteira - Saldo")).toBeInTheDocument();
    expect(screen.getByText("Trocar para moedas")).toBeInTheDocument();
  });

  it("renders correctly with amount", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValueOnce({
      moneyWallet: {
        amount: 100,
      },
    } as any);

    render(<MoneyWallet />);

    expect(screen.getByText("R$ 100,00")).toBeInTheDocument();
  });

  it("should open modal", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      coinsWallet: {
        amount: 100,
      },
      canProceedConvertCoinsToMoney: true,
      handleTransferCoinsWalletToMoneyWallet: jest.fn(),
    } as any);

    render(<MoneyWallet />);

    expect(screen.queryByText(/finalizar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).not.toBeInTheDocument();

    const openModalButton = screen.getByRole("button", {
      name: /trocar para moedas/i,
    });

    fireEvent.click(openModalButton);

    expect(screen.queryByText(/finalizar/i)).toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).toBeInTheDocument();
  });
});
