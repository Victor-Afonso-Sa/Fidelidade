import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from ".";

describe("Sidebar Component", () => {
  let homeIcon: HTMLElement;
  let dashboardIcon: HTMLElement;
  let sellIcon: HTMLElement;
  let appsIcon: HTMLElement;

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/pdv/home"]}>
        <Sidebar />
      </MemoryRouter>
    );
    homeIcon = screen.getByTestId("homeIcon");
    dashboardIcon = screen.getByTestId("dashboardIcon");
    sellIcon = screen.getByTestId("sellIcon");
    appsIcon = screen.getByTestId("appsIcon");
  });

  it("renders correctly", () => {
    expect(homeIcon).toBeInTheDocument();
    expect(dashboardIcon).toBeInTheDocument();
    expect(sellIcon).toBeInTheDocument();
    expect(appsIcon).toBeInTheDocument();
  });

  it("Should changed homeIcon classname to active correctly", () => {
    userEvent.click(homeIcon);

    expect(homeIcon.classList).toContain("active");
  });

  it("Should changed DashboarIcon classname to active correctly", () => {
    userEvent.click(dashboardIcon);

    expect(dashboardIcon.classList).toContain("active");
  });

  it("Should changed sellIcon classname to active correctly", () => {
    userEvent.click(sellIcon);

    expect(sellIcon.classList).toContain("active");
  });

  it("Should changed appsIcon classname to active correctly", () => {
    userEvent.click(appsIcon);

    expect(appsIcon.classList).toContain("active");
  });
});
