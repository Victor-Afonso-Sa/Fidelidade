import { fireEvent, render, screen } from "@testing-library/react";
import { BaseModal } from ".";

describe("BaseModal componenet", () => {
  it("should render correctly", () => {
    const onValueChangeMock = jest.fn();
    render(
      <BaseModal
        InputName="input-name"
        balance={10}
        cashValue={10}
        label="Fake Label"
        modalText="Fake Modal Text"
        onValueChange={onValueChangeMock}
      />
    );

    expect(screen.getByTestId("base-modal")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /fake modal text/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/fake label/i)).toBeInTheDocument();

    const inputElement = screen.getByTestId("input-base-modal");
    const inputValue = "100";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(onValueChangeMock).toHaveBeenCalledWith(inputValue);
  });
});
