import { fireEvent, render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { act } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { InputMask } from ".";

jest.mock("react-hook-form");

describe("InputMask component", () => {
  it("should renders correctly", () => {
    render(
      <InputMask
        mask="99999-999"
        placeholder="99999-999"
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
    render(
      <InputMask
        mask="99999-999"
        placeholder="99999-999"
        name="fakeName"
        type="number"
        label="fake-label"
      />
    );

    expect(screen.queryByText(/fake-class/i)).not.toBeInTheDocument();
  });

  it("should render with error", () => {
    const useFormMocked = mocked(useForm);
    const registerMock = jest.fn().mockReturnValue({
      onChange: jest.fn(),
    });
    useFormMocked.mockReturnValue({
      register: registerMock,
    } as any);

    render(
      <InputMask
        mask="99999-999"
        placeholder="99999-999"
        name="fakeName"
        type="number"
        label="fake-label"
        error={{
          type: "fake-type",
          message: "fake-message",
        }}
      />
    );
    screen.debug();

    expect(screen.queryByText(/is-invalid/i)).not.toBeInTheDocument();
  });

  it("should render with errora", async () => {
    const useFormMocked = mocked(useForm);
    const customOnChangeMock = jest
      .fn()
      .mockImplementationOnce((value: string) => console.log(value));
    const onChangeMock = jest.fn();
    const registerMock = jest.fn().mockReturnValue({
      onChange: customOnChangeMock,
    });
    useFormMocked.mockReturnValue({
      register: registerMock,
    } as any);

    render(
      <InputMask
        mask="99999-999"
        placeholder="99999-999"
        name="fakeName"
        type="number"
        label="fake-label"
        error={{
          type: "fake-type",
          message: "fake-message",
        }}
        onChange={onChangeMock}
      />
    );

    const inputElement = screen.getByTestId("fakeName");

    await act(async () => {
      fireEvent.change(inputElement, { target: { value: "fake-value" } });
    });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
