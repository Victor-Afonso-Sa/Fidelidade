import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Register } from ".";

describe("Check validation on register", () => {
  it("Check if page renders", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/cadastro" }]}>
        <Register />
      </MemoryRouter>
    );

    const textElement = screen.getByText(/cadastre-se/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Try to signUp and return a error all form", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/cadastro" }]}>
        <Register />
      </MemoryRouter>
    );

    const buttonSignUp = screen.getByRole("button", { name: /cadastrar/i });
    userEvent.click(buttonSignUp);

    const inputs = await screen.findAllByRole("textbox");
    inputs.map((input) => expect(input).toHaveClass("is-invalid"));
  });

  it("check all form and signUp", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/cadastro" }]}>
        <Register />
      </MemoryRouter>
    );

    const inputName = screen.getByTestId("name");
    userEvent.type(inputName, "Guilherme");
    expect(inputName).toHaveValue("Guilherme");

    const inputEmail = screen.getByTestId("email");
    userEvent.type(inputEmail, "email@gmail.com");
    expect(inputEmail).toHaveValue("email@gmail.com");

    const inputPassword = screen.getByTestId("password");
    userEvent.type(inputPassword, "123456abc");
    expect(inputPassword).toHaveValue("123456abc");

    const inputConfirmPassword = screen.getByTestId("confirm-password");
    userEvent.type(inputConfirmPassword, "123456abc");
    expect(inputConfirmPassword).toHaveValue("123456abc");

    const inputCpf = screen.getByTestId("cpf");
    fireEvent.input(inputCpf, { target: { value: "123.456.789-01" } });
    expect(inputCpf).toHaveValue("123.456.789-01");

    const inputCep = screen.getByTestId("cep");
    fireEvent.input(inputCep, { target: { value: "17018-750" } });
    expect(inputCep).toHaveValue("17018-750");

    const inputStreet = await screen.findByTestId("street");
    userEvent.type(inputStreet, "Avenida Brasil");
    expect(inputStreet).toHaveValue("Avenida Brasil");

    const inputCity = screen.getByTestId("city");
    userEvent.type(inputCity, "Bauru");
    expect(inputCity).toHaveValue("Bauru");

    const inputState = screen.getByTestId("state");
    userEvent.type(inputState, "SP");
    expect(inputState).toHaveValue("SP");
  });
});
