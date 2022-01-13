import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import * as AlertService from "../Alert";
import { RegisterForm } from "./index";

describe("RegisterForm Component", () => {
  const presentAlertSpy = jest.spyOn(AlertService, "presentAlert");
  let submitButton: HTMLButtonElement;
  let elementsForm: { [key: string]: HTMLInputElement } = {};
  let fakeForm: { [key: string]: string } = {
    nomeCompleto: "fake-name",
    email: "fake-email",
    password: "fake-password",
    confirmPassword: "fake-password",
    cpf: "126.931.436-08",
    cep: "30550-130",
    number: "99",
    state: "MG",
    street: "Rua capuri",
    city: "Belo Horizonte",
  };
  const fillAllFields = () => {
    Object.values(elementsForm).forEach((element: any) => {
      if (
        element.name === "cpf" ||
        element.name === "cep" ||
        element.name === "street" ||
        element.name === "state" ||
        element.name === "city"
      ) {
        fireEvent.input(element, {
          target: { value: fakeForm[element.name] },
        });
      }
      userEvent.type(element, fakeForm[element.name]);
    });
  };
  beforeEach(() => {
    act(() => {
      render(<RegisterForm btnText="fake-button" />);
    });
    Object.keys(fakeForm).forEach((key) => {
      elementsForm[key] = screen.getByTestId(key) as HTMLInputElement;
    });
    submitButton = screen.getByRole("button") as HTMLButtonElement;
  });

  it("renders correctly", () => {
    expect(submitButton).toBeInTheDocument();
    Object.values(elementsForm).forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  it("Should show te success alert if the form is correct", async () => {
    await act(async () => {
      fillAllFields();
      fireEvent.submit(screen.getByTestId("RegisterForm"));
      await waitFor(async () => {
        expect(presentAlertSpy).toHaveBeenCalledWith({
          message: "Sucesso",
          type: "success",
        });
      });
    });
  });

  it("Should make CEP behavior correctly", async () => {
    await act(async () => {
      fireEvent.input(elementsForm.cep, {
        target: { value: "30550-130" },
      });
      await waitFor(async () => {
        expect(elementsForm.cep).toHaveValue("30550-130");
        expect(elementsForm.city).toHaveValue("Belo Horizonte");
        expect(elementsForm.state).toHaveValue("MG");
        expect(elementsForm.street).toHaveValue("Rua Capuri");
      });
    });
  });

  it("Should all fields be invalid", async () => {
    await act(async () => {
      fireEvent.submit(screen.getByTestId("RegisterForm"));
      await waitFor(async () => {
        Object.values(elementsForm).forEach((element: any) => {
          expect(element).toHaveClass("is-invalid");
        });
      });
    });
  });

  it("Should validate the field CEP", async () => {
    await act(async () => {
      fillAllFields();
      fireEvent.input(elementsForm.cep, {
        target: { value: "30550" },
      });
      fireEvent.submit(screen.getByTestId("RegisterForm"));
      await waitFor(async () => {
        expect(presentAlertSpy).toHaveBeenCalledWith({
          message: "Por favor verfique os campos e tente novamente",
          type: "danger",
        });
      });
    });
  });

  it("Should validate the field CPF", async () => {
    await act(async () => {
      fillAllFields();
      fireEvent.input(elementsForm.cpf, {
        target: { value: "305.500" },
      });
      fireEvent.submit(screen.getByTestId("RegisterForm"));
      await waitFor(async () => {
        expect(presentAlertSpy).toHaveBeenCalledWith({
          message: "Por favor verfique os campos e tente novamente",
          type: "danger",
        });
      });
    });
  });
});
