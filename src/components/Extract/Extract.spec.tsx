import { render, screen } from "@testing-library/react";
import { Extract } from ".";

describe("Extract Component", () => {
  it("renders correctly", () => {
    render(<Extract />);

    expect(screen.getByText("Histórico de Transações")).toBeInTheDocument();
  });
});
