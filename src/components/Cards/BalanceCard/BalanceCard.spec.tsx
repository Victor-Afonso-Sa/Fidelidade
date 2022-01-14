import { fireEvent, render, screen } from "@testing-library/react";
import { Balance } from ".";

describe("BalanceCard component", () => {
  it("should renders correclty", () => {
    const actionMock = jest.fn();

    render(
      <Balance
        title="Fake Title"
        btnText="fake-btn-text"
        amount={10}
        action={actionMock}
      />
    );

    expect(screen.getByText("Fake Title")).toBeInTheDocument();
    expect(screen.getByText("fake-btn-text")).toBeInTheDocument();
    expect(screen.getByText("R$ 10,00")).toBeInTheDocument();
  });

  it("should renders if Balance isCoins", () => {
    const actionMock = jest.fn();
    render(
      <Balance
        title="Fake Title"
        btnText="fake-btn-text"
        amount={10}
        isCoins
        action={actionMock}
      />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Fake Title")).toBeInTheDocument();
    expect(screen.getByText("fake-btn-text")).toBeInTheDocument();

    fireEvent.click(screen.getByText("fake-btn-text"));
    expect(actionMock).toHaveBeenCalled();
  });
});
