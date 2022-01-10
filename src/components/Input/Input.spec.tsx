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

  it("should render without className", () => {
    render(<Input name="fakeName" type="number" label="fake-label" />);
    screen.debug();

    expect(screen.queryByText(/fake-class/i)).not.toBeInTheDocument();
  });
});
