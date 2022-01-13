import { render, screen } from "@testing-library/react";
import { ExtractItem } from ".";

describe("ExtractItem Component", () => {
  it("renders correctly", () => {
    render(<ExtractItem date="fake-date" amount="10,00" />);

    expect(screen.getByText("Resgate de: R$ 10,00")).toBeInTheDocument();
    expect(screen.getByText("fake-date")).toBeInTheDocument();
  });
});
