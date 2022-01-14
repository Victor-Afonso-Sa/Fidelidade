import { render, screen } from "@testing-library/react";
import { DisplayCoins } from ".";

describe("DisplayCoins Component", () => {
  it("renders correctly", () => {
    let randomNumber = Math.floor(100 * Math.random() + 1);
    render(<DisplayCoins amount={randomNumber} />);
    expect(screen.getByAltText(/Moeda/i)).toBeInTheDocument();
    expect(screen.getByText(`${randomNumber}`)).toBeInTheDocument();
  });
});
