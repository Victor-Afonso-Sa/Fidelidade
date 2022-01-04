import { render, screen } from "@testing-library/react";
import Alert from ".";

describe("Alert component", () => {
  it("renders correctly", () => {
    render(<Alert />);

    expect(screen.getByText(/texto de exemplo aqui!/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /ok/i,
      })
    ).toBeInTheDocument();
  });
});
