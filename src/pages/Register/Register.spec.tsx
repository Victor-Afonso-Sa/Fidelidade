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
});
