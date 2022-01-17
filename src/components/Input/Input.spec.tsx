import { render, screen } from "@testing-library/react";
import { Input } from ".";

jest.mock("react-hook-form");

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

    expect(screen.getByTestId("fakeName")).toBeInTheDocument();
  });

  it("should render without className", () => {
    render(<Input name="fakeName" type="number" label="fake-label" />);

    expect(screen.queryByText(/fake-class/i)).not.toBeInTheDocument();
  });

  it("should render with error", () => {
    render(
      <Input
        name="fakeName"
        type="number"
        label="fake-label"
        error={{
          type: "fake-type",
          message: "fake-message",
        }}
      />
    );

    expect(screen.queryByText(/is-invalid/i)).not.toBeInTheDocument();
  });
});
