import { render, screen } from "@testing-library/react";
import { PaymentCard } from ".";

describe("PaymentCard Component", () => {
  it("renders correctly", () => {
    render(<PaymentCard icon="FaCreditCard" label="fake-label" />);

    expect(screen.getByTestId("paymentIcon")).toBeInTheDocument();
    expect(screen.getByText(/fake-label/i)).toBeInTheDocument();
  });

  it("Should have active classname when is active", () => {
    const { container } = render(
      <PaymentCard icon="FaCreditCard" label="fake-label" active />
    );

    expect(screen.getByTestId("paymentIcon")).toBeInTheDocument();
    expect(screen.getByText(/fake-label/i)).toBeInTheDocument();
    expect(container.querySelector("div")?.classList).toContain("active");
  });

  it("Should have empty classname when is not active", () => {
    const { container } = render(
      <PaymentCard icon="FaCreditCard" label="fake-label" />
    );

    expect(screen.getByTestId("paymentIcon")).toBeInTheDocument();
    expect(screen.getByText(/fake-label/i)).toBeInTheDocument();
    expect(container.querySelector("div")?.classList).not.toContain("active");
  });
});
