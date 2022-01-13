import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("renders correctly", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Header name="fake-user" cargo="fake-cargo" />);

    expect(screen.getByText(/fake-user/i)).toBeInTheDocument();
    expect(screen.getByText(/fake-cargo/i)).toBeInTheDocument();
  });
});
