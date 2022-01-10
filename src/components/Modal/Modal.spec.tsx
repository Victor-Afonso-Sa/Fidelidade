import { render, screen } from "@testing-library/react";
import { Modal } from ".";

describe("Modal component", () => {
  it("should render correctly", () => {
    render(
      <Modal
        modalContent={{
          ModalContent: () => <div> modal content</div>,
          contentProps: {},
        }}
        state={true}
        setState={() => jest.fn()}
        okText="ok"
        cancelText="cancel"
        title="title"
      />
    );

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /title/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument();
  });
});
