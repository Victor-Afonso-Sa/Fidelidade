// @flow
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import * as AlertService from "../../../../components/Alert";
import { Input } from "../../../../components/Input";
import { api } from "../../../../services/api";
import { LoginType } from "../../../../types/LoginTypes";
import { CustomForm, LoginButton, Title } from "./styles";

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
    data.cpf = data.cpf.split(".").join("").split("-").join("");

    api
      .post(`/login`, data)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        AlertService.presentAlert({
          type: "danger",
          message: "Usuário ou senha incorretos ",
        });
      });
  };

  const handleError = (errors: FieldErrors) => {
    Object.values(errors).map((e) =>
      e?.message
        ? AlertService.presentAlert({
            type: "danger",
            message: e.message,
          })
        : false
    );
  };

  return (
    <>
      <CustomForm onSubmit={handleSubmit(handleSignIn, handleError)}>
        <Title className="mb-3 ">Bem-vindo!</Title>

        <Input
          placeholder="Insira seu CPF"
          label="CPF"
          type="text"
          mask="999.999.999-99"
          inputClassName="cpf"
          error={formState.errors.cpf}
          {...register("cpf", { required: true })}
        />
        <Input
          placeholder="Insira sua senha"
          label="Senha"
          type="password"
          inputClassName="password"
          error={formState.errors.password}
          {...register("password", { required: true })}
        />
        <LoginButton type="submit" className="my-2">
          Entrar
        </LoginButton>
      </CustomForm>
    </>
  );
};
