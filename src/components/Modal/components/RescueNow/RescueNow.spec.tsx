import { render, screen } from "@testing-library/react";
import { RescueNow } from ".";

jest.mock("../../../../utils/formatCurrencyPtBr", () => {
  return {
    formatCurrencyPtBr: jest.fn(() => "R$ 1,00"),
  };
});

describe("RescueNow component", () => {
  it("should be able renders correctly", () => {
    render(<RescueNow />);

    expect(screen.getByTestId("base-modal")).toBeInTheDocument();
  });
});
