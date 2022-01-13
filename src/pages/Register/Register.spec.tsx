import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Register } from ".";

describe("Check validation on register", () => {
  it("Check if page renders", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/cadastro" }]}>
        <Register />
      </MemoryRouter>
    );

    const textElement = screen.getByText(/cadastre-se/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Check errors in form", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/cadastro" }]}>
        <Register />
      </MemoryRouter>
    );

    const buttonSignUp = screen.getByRole("button", { name: /cadastrar/i });
    userEvent.click(buttonSignUp);

    const inputs = await screen.findAllByTestId(/input-component/i);
    inputs.map((input) => expect(input).toHaveClass("is-invalid"));
  });
});
