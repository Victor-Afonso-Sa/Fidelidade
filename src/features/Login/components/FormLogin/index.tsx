// @flow
import * as React from "react";

import { FieldErrors, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { LoginType } from "../../../../types/LoginTypes";
import { CustomForm, LoginButton, Title } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
  let navigate = useNavigate();

  const validatedFields = {
    cpf: yup
      .string()
      // eslint-disable-next-line no-useless-escape
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF invalido")
      .required("CPF invalido"),
    password: yup.string().required("Senha é obrigatoria"),
  };
  const schema = yup.object(validatedFields).required();
  const { register, handleSubmit } = useForm<LoginType>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });
  const onSubmit = (data: LoginType) => {
    console.log(data);
    navigate("/")
  };
  const onError = (errors: FieldErrors) => {
    Object.values(errors).map(e => (e && e.message ?  toast.error(e.message) : false))
  }
  return (
    <>
      <CustomForm onSubmit={handleSubmit(onSubmit,onError)}>
        <Title className="mb-3 ">Bem-vindo!</Title>

        <Input
          name="cpf"
          placeholder="Insira seu CPF"
          register={register}
          label="CPF"
          type="text"
          mask="999.999.999-99"
          inputClassName="cpf"
        />
        <Input
          name="password"
          placeholder="Insira sua senha"
          register={register}
          label="Senha"
          type="password"
        />
        <LoginButton type="submit" className="my-2">
          Entrar
        </LoginButton>
      </CustomForm>
    </>
  );
};
