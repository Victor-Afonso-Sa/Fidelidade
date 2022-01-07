import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mocked } from "jest-mock";
import * as AlertService from "../Alert";
import { CoinWallet } from ".";
import { useWallet } from "../../hooks/useWallet";

jest.mock("../../utils/formatCurrencyPtBr", () => {
  return {
    formatCurrencyPtBr: jest.fn(() => "R$ 1,00"),
  };
});

jest.mock("../../hooks/useWallet");

describe("CoinWallet component", () => {
  it("should renders correctly", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValueOnce({
      coinsWallet: {
        amount: null,
      },
      canProceedConvertCoinsToMoney: true,
      handleTransferCoinsWalletToMoneyWallet: jest.fn(),
    } as any);

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
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValueOnce({
      coinsWallet: {
        amount: null,
      },
      canProceedConvertCoinsToMoney: true,
      handleTransferCoinsWalletToMoneyWallet: jest.fn(),
    } as any);

    render(<CoinWallet />);

    expect(screen.queryByText(/finalizar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/fechar/i)).not.toBeInTheDocument();
  });

  it("should open modal", () => {
    const useWalletMocked = mocked(useWallet);
    useWalletMocked.mockReturnValue({
      coinsWallet: {
        amount: 10,
      },
      canProceedConvertCoinsToMoney: true,
      handleTransferCoinsWalletToMoneyWallet: jest.fn(),
    } as any);

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

  it("should call function to convert coins to money", async () => {
    const useWalletMocked = mocked(useWallet);
    const handleTransferCoinsWalletToMoneyWalletMock = jest.fn();
    useWalletMocked.mockReturnValue({
      coinsWallet: {
        amount: 100000,
      },
      canProceedConvertCoinsToMoney: true,
      handleTransferCoinsWalletToMoneyWallet:
        handleTransferCoinsWalletToMoneyWalletMock,
    } as any);

    jest.spyOn(AlertService, "presentAlert").mockImplementation(() => {
      return {
        type: "success",
        message: "Resgate realizado com sucesso!",
      };
    });

    render(<CoinWallet />);

    const openModalButton = screen.getByRole("button", {
      name: /resgatar/i,
    });

    userEvent.click(openModalButton);

    const finalizarButton = screen.getByTestId("btn-resgatar");
    expect(finalizarButton).toBeInTheDocument();

    userEvent.click(finalizarButton);

    await waitFor(async () => {
      expect(handleTransferCoinsWalletToMoneyWalletMock).toHaveBeenCalled();
    });
  });
});
