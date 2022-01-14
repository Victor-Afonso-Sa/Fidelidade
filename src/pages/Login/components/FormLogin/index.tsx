// @flow
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Input } from "../../../../components/Input";

import { LoginType } from "../../../../types/LoginTypes";
import { CustomForm, LoginButton, Title } from "./styles";
import { presentAlert } from "../../../../components/Alert";
import { InputMask } from "../../../../components/InputMask";

const validateCPF = RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);

const schema = yup.object().shape({
  cpf: yup
    .string()
    .matches(validateCPF, "CPF inválido")
    .required("O CPF é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export const FormLogin = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<LoginType>({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<LoginType> = (data) => {
    try {
      data.cpf = data.cpf.split(".").join("").split("-").join("");
      navigate("/");
    } catch (error) {
      presentAlert({
        type: "danger",
        message: "Usuário ou senha incorretos ",
      });
    }
  };

  const handleError = (errors: FieldErrors) => {
    Object.values(errors).forEach((e) =>
      e?.message
        ? presentAlert({
            type: "danger",
            message: e.message,
          })
        : false
    );
  };

  return (
    <CustomForm
      data-testid="form-login"
      onSubmit={handleSubmit(handleSignIn, handleError)}
    >
      <Title className="mb-3 ">Bem-vindo!</Title>

      <InputMask
        data-testid="input-cpf"
        placeholder="Insira seu CPF"
        label="CPF"
        type="text"
        mask="999.999.999-99"
        inputClassName="cpf"
        error={formState.errors.cpf}
        {...register("cpf", { required: true })}
      />

      <Input
        data-testid="input-password"
        placeholder="Insira sua senha"
        label="Senha"
        type="password"
        error={formState.errors.password}
        {...register("password", { required: true })}
      />

      <LoginButton data-testid="login-button" type="submit" className="my-2">
        Entrar
      </LoginButton>
    </CustomForm>
  );
};
