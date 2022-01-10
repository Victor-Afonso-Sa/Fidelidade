import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input component", () => {
  it("should render correctly", () => {
    render(
      <Input
        className="fake-class"
        name="fakeName"
        type="number"
        label="fake-label"
      />
    );

    expect(screen.getByText(/fake-label/i)).toBeInTheDocument();

    expect(screen.getByTestId("input-component")).toBeInTheDocument();
  });
});
