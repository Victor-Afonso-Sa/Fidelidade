import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useNavigate } from "react-router-dom";
import { FormLogin } from ".";

jest.mock("react-router-dom");

describe("Login Page", () => {
  it("should renders correctly", () => {
    const useNavigateMocked = mocked(useNavigate);
    useNavigateMocked.mockReturnValue({
      navigate: jest.fn(),
    } as any);

    render(<FormLogin />);

    expect(screen.getByTestId("form-login")).toBeInTheDocument();
    expect(screen.getByTestId("input-cpf")).toBeInTheDocument();
    expect(screen.getByTestId("input-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });
});
