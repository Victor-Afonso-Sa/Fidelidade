// @flow
import axios from "axios";
import * as yup from "yup";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../Input";
import { CepType, RegisterType } from "../../types/RegisterTypes";

import { PrimaryBtn } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { presentAlert } from "../Alert";

type Props = {
  btnText: string;
  allReadOnly?: boolean;
  formValues?: RegisterType;
};
const validateCPF = RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
const schema: yup.SchemaOf<RegisterType> = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .when("senha", (senha, field) =>
      senha
        ? field.required().oneOf([yup.ref("senha")], "As senhas não conferem")
        : field
    )
    .required("O campo confirmar senha é obrigatória"),
  cpf: yup
    .string()
    .matches(validateCPF, "CPF inválido")
    .required("O CPF é obrigatório"),
  cep: yup
    .string()
    .matches(/[0-9]{5}-[0-9]{3}/, "CEP inválido")
    .required("O CEP é obrigatório"),
  street: yup.string().required("A rua é obrigatória"),
  number: yup.string().required("O número é obrigatório"),
  city: yup.string().required("A cidade é obrigatória"),
  state: yup.string().required("O estado é obrigatório"),
});

export const RegisterForm = ({
  btnText,
  allReadOnly = false,
  formValues,
}: Props) => {
  const { register, setValue, handleSubmit, formState } = useForm<RegisterType>(
    {
      resolver: yupResolver(schema),
    }
  );

  const handleRegisterNewUser: SubmitHandler<RegisterType> = async (data) => {
    console.log(data);
    presentAlert({
      type: "success",
      message: "Sucesso",
    });
  };

  const getAddress = (cep: string) => {
    if (cep.match("[0-9]{5}-[0-9]{3}")) {
      axios
        .get<CepType>(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => {
          setValue("street", resp.data.logradouro);
          setValue("city", resp.data.localidade);
          setValue("state", resp.data.uf);
        });
    }
  };

  const handleError = (errors: FieldErrors) => {
    console.log(errors);
    Object.values(errors).forEach((e) =>
      e?.message
        ? presentAlert({
            type: "danger",
            message: "Por favor verfique os campos e tente novamente",
          })
        : false
    );
  };
  return (
    <Container>
      <form
        className="d-flex flex-column"
        onSubmit={handleSubmit(handleRegisterNewUser, handleError)}
        data-testid="RegisterForm"
      >
        <Input
          className="col-12"
          type="text"
          label="Nome Completo"
          readOnly={allReadOnly}
          error={formState.errors.name}
          {...register("name", { required: true })}
        />

        <Input
          className="col-12"
          readOnly={allReadOnly}
          type="email"
          label="Email"
          error={formState.errors.email}
          {...register("email", { required: true })}
        />

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="password"
              label="Senha"
              readOnly={allReadOnly}
              error={formState.errors.password}
              {...register("password", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              inputClassName="w-100"
              type="password"
              label="Confirmar Senha"
              error={formState.errors.confirmPassword}
              {...register("confirmPassword", { required: true })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              label="CPF"
              mask="999.999.999-99"
              error={formState.errors.cpf}
              {...register("cpf", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              mask="99999-999"
              type="text"
              label="CEP"
              error={formState.errors.cep}
              {...register("cep", {
                required: true,
                onChange: (e) => {
                  getAddress(e.target.value);
                },
              })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              type="text"
              label="Rua"
              readOnly
              error={formState.errors.street}
              {...register("street", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              label="Número"
              error={formState.errors.number}
              {...register("number", { required: true })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              type="text"
              label="Cidade"
              readOnly
              error={formState.errors.city}
              {...register("city", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              type="text"
              label="Estado"
              readOnly
              error={formState.errors.state}
              {...register("state", { required: true })}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end float-end mb-4">
          <PrimaryBtn type="submit" className="">
            {btnText}
          </PrimaryBtn>
        </div>
      </form>
    </Container>
  );
};
