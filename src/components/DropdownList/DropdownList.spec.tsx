import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DropdownList } from ".";

describe("Dropdown list Component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <DropdownList />
      </MemoryRouter>
    );
    expect(screen.getAllByText("Ver perfil")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Notificações")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Formas de Pagamento")[0]).toBeInTheDocument();
  });
});
