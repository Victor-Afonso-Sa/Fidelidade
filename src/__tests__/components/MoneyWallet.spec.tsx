import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";

import { MoneyWallet } from "../../components/MoneyWallet";
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
});
