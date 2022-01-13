import { render, screen } from "@testing-library/react";
import { Login } from ".";

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe("Login page", () => {
  it("should render the login page", () => {
    render(<Login />);
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });
});
