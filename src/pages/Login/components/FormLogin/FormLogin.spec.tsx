import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mocked } from "jest-mock";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";
import * as AlertService from "../../../../components/Alert";
import { FormLogin } from ".";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom");

describe("Login Page", () => {
  it("should renders correctly", () => {
    render(<FormLogin />);

    expect(screen.getByTestId("form-login")).toBeInTheDocument();
    expect(screen.getByTestId("cpf")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("should be able to sign in", async () => {
    const useNavigateMocked = mocked(useNavigate);
    const navigateMock = jest.fn();
    useNavigateMocked.mockImplementationOnce(() => {
      return navigateMock;
    });

    render(<FormLogin />);

    await act(async () => {
      const inputCpfElement = screen.getByTestId("cpf");
      const inputPasswordElement = screen.getByTestId("password");

      fireEvent.input(inputCpfElement, { target: { value: "123.456.789-01" } });
      fireEvent.input(inputPasswordElement, { target: { value: "12345678" } });

      const formElement = screen.getByTestId("login-button");
      userEvent.click(formElement);
    });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/");
    });
  });

  it("should call function handleError when occour schema validation", async () => {
    const useNavigateMocked = mocked(useNavigate);
    useNavigateMocked.mockReturnValueOnce({
      navigate: jest.fn(),
    } as any);

    render(<FormLogin />);
    const presentAlertSpy = jest.spyOn(AlertService, "presentAlert");

    await act(async () => {
      const inputCpfElement = screen.getByTestId("cpf");

      fireEvent.input(inputCpfElement, { target: { value: "123.456.789-01" } });

      const formElement = screen.getByTestId("form-login");
      fireEvent.submit(formElement);
    });

    await waitFor(() => {
      expect(presentAlertSpy).toHaveBeenCalled();
    });
  });

  it("should throws error when submit", async () => {
    const useNavigateMocked = mocked(useNavigate);
    useNavigateMocked.mockReturnValueOnce({
      navigate: jest.fn(),
    } as any);

    render(<FormLogin />);
    const presentAlertSpy = jest.spyOn(AlertService, "presentAlert");

    await act(async () => {
      const inputCpfElement = screen.getByTestId("cpf");
      const inputPasswordElement = screen.getByTestId("password");

      fireEvent.input(inputCpfElement, { target: { value: "123.456.789-01" } });
      fireEvent.input(inputPasswordElement, { target: { value: "12345678" } });

      const formElement = screen.getByTestId("form-login");
      fireEvent.submit(formElement);
    });

    await waitFor(() => {
      expect(presentAlertSpy).toHaveBeenCalled();
    });
  });
});
