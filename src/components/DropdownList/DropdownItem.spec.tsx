import { fireEvent, render, screen } from "@testing-library/react";
import { MdClear } from "react-icons/md";
import { DropdownItem } from "./DropdownItem";

describe("Dropdown item Component", () => {
  it("renders correctly", () => {
    render(<DropdownItem label={"fake-label"} icon={<MdClear />} />);
    expect(screen.getByText("fake-label")).toBeInTheDocument();
  });

  it("Should onclick execute the prop function correctly", () => {
    const onClickSpy = jest.fn();
    const { container } = render(
      <DropdownItem
        label={"fake-label"}
        icon={<MdClear />}
        onClick={onClickSpy}
      />
    );
    fireEvent.click(container.firstChild!);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
