import { render, screen, waitFor } from "@testing-library/react";
import Alert, { presentAlert } from "../Alert";

describe("Alert component", () => {
  it("render correct message", async () => {
    const message = "My success message";
    render(<Alert />);
    await waitFor(() => {
      presentAlert({ message, type: "success" });
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });
  it("render info message", async () => {
    const message = "My success message";
    render(<Alert />);
    await waitFor(() => {
      presentAlert({ message, type: "info" });
    });

    // Validate message
    expect(screen.getByText(message)).toBeInTheDocument();

    // Validate type
    expect(screen.getByTestId("info")).toBeInTheDocument();
  });
});
