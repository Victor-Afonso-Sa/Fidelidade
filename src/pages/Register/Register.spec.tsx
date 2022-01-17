import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

    const inputEmail = screen.getByTestId("email");
    userEvent.type(inputEmail, "email@gmail.com");

    const inputPassword = screen.getByTestId("password");
    userEvent.type(inputPassword, "123456abc");

    const inputConfirmPassword = screen.getByTestId("confirmPassword");
    userEvent.type(inputConfirmPassword, "123456abc");

    const inputCpf = screen.getByTestId("cpf");
    fireEvent.change(inputCpf, { target: { value: 12345678901 } });
    expect(inputCpf).toHaveValue("123.456.789-01");

    const inputStreetNumber = screen.getByTestId("number");
    userEvent.type(inputStreetNumber, "123");

    const inputCep = screen.getByTestId("cep");
    fireEvent.change(inputCep, { target: { value: 17018750 } });
    expect(inputCep).toHaveValue("17018-750");

    await waitFor(() => {
      const inputStreet = screen.getByTestId("street");
      expect(inputStreet).toHaveValue("Rua Luiz Bleriot");
      const inputCity = screen.getByTestId("city");
      expect(inputCity).toHaveValue("Bauru");
      const inputState = screen.getByTestId("state");
      expect(inputState).toHaveValue("SP");
    });

    const buttonSignUp = screen.getByRole("button", {
      name: /cadastrar/i,
    });

    userEvent.click(buttonSignUp);
    const inputs = await screen.findAllByRole("textbox");
    inputs.map((input) => expect(input).not.toHaveClass("is-invalid"));

    await waitFor(() => {
      const textHome = screen.queryByText(/olá/i);
      expect(textHome).not.toBeInTheDocument();
    });
  });
});
