import { render, screen } from "@testing-library/react";
import { MenssageCard } from ".";

describe("MessageCard component", () => {
  it("should renders correctly", () => {
    render(<MenssageCard title="Fake Title" content="content fake" />);

    expect(screen.getByText("Fake Title")).toBeInTheDocument();
    expect(screen.getByText("content fake")).toBeInTheDocument();
  });
});
