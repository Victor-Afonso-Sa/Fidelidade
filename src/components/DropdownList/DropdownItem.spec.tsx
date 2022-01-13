import { fireEvent, render, screen } from "@testing-library/react";
import { MdClear } from "react-icons/md";
import { MemoryRouter } from "react-router-dom";
import { DropdownItem } from "./DropdownItem";

describe("Dropdown item Component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <DropdownItem label={"fake-label"} icon={<MdClear />} />
      </MemoryRouter>
    );
    expect(screen.getByText("fake-label")).toBeInTheDocument();
  });

  it("Should onclick execute the prop function correctly", () => {
    const onClickSpy = jest.fn();
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <DropdownItem
          label={"fake-label"}
          icon={<MdClear />}
          onClick={onClickSpy}
        />
      </MemoryRouter>
    );
    fireEvent.click(container.firstChild!);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
