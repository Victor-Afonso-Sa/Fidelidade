import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mocked } from "jest-mock";
import * as AlertService from "../Alert";
import { MoneyWallet } from ".";
import { useWallet } from "../../hooks/useWallet";

jest.mock("../../hooks/useWallet");

describe("MoneyWallet Component", () => {
  it("renders correctly", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      moneyWallet: {
        amount: null,
      },
      canProceedConvertMoneyToCoin: true,
      handleTransferMoneyWalletToCoinsWallet: jest.fn(),
    } as any);

    render(<MoneyWallet />);

    expect(screen.getByText("Carteira - Saldo")).toBeInTheDocument();
    expect(screen.getByText("Trocar para moedas")).toBeInTheDocument();
    expect(screen.getByText("R$ 0,00")).toBeInTheDocument();
  });

  it("renders correctly with amount is 10", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      moneyWallet: {
        amount: 10,
      },
      canProceedConvertMoneyToCoin: true,
      handleTransferMoneyWalletToCoinsWallet: jest.fn(),
    } as any);

    render(<MoneyWallet />);

    expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
  });

  it("should open modal", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      moneyWallet: {
        amount: 10,
      },
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

  it("should call function to convert coins to money", async () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      moneyWallet: {
        amount: 50,
      },
      canProceedConvertMoneyToCoin: true,
      handleTransferMoneyWalletToCoinsWallet: jest.fn(),
    } as any);

    const presentAlertSpy = jest.spyOn(AlertService, "presentAlert");

    render(<MoneyWallet />);

    const openModalButton = screen.getByRole("button", {
      name: /trocar para moedas/i,
    });

    fireEvent.click(openModalButton);

    const finalizarButton = screen.getByRole("button", {
      name: /finalizar/i,
    });

    expect(finalizarButton).toBeInTheDocument();

    fireEvent.click(finalizarButton);

    await waitFor(async () => {
      expect(presentAlertSpy).toHaveBeenCalled();
    });
  });
});
