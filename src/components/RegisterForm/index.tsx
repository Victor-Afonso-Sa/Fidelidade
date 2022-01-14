// @flow
import axios from "axios";
import * as yup from "yup";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input";
import * as AlertService from "../../components/Alert";

import { CepType, RegisterType } from "../../types/RegisterTypes";
import { PrimaryBtn } from "../../styles/global";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

type Props = {
  btnText: string;
  allReadOnly?: boolean;
};

const schema = yup.object().shape({
  nomeCompleto: yup.string().required("O nome é obrigatório"),
  email: yup.string().required("O email é obrigatório"),
  senha: yup.string().required("A senha é obrigatória"),
  confirmarSenha: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .when("senha", (senha, field) =>
      senha
        ? field.required().oneOf([yup.ref("senha")], "As senhas não conferem")
        : field
    ),
  cpf: yup.string().required("O CPF é obrigatório"),
  cep: yup.string().required("O CEP é obrigatório"),
  rua: yup.string().required("A rua é obrigatória"),
  numero: yup.string().required("O número é obrigatório"),
  cidade: yup.string().required("A cidade é obrigatória"),
  uf: yup.string().required("O estado é obrigatório"),
});

export const RegisterForm = ({ btnText, allReadOnly = false }: Props) => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit, formState } = useForm<RegisterType>(
    {
      resolver: yupResolver(schema),
    }
  );

  const handleRegisterNewUser: SubmitHandler<RegisterType> = async (data) => {
    try {
      await api.post("/cadastro", data);
      console.log("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (e) {
      console.error("Algo deu errado!");
    }
  };

  const getAddress = (cep: string) => {
    if (cep.match("[0-9]{5}-[0-9]{3}")) {
      axios
        .get<CepType>(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => {
          setValue("rua", resp.data.logradouro);
          setValue("cidade", resp.data.localidade);
          setValue("uf", resp.data.uf);
        });
    }
  };

  const handleError = (errors: FieldErrors) => {
    Object.values(errors).forEach((e) =>
      e?.message
        ? AlertService.presentAlert({
            type: "danger",
            message: "Por favor verifique os campos e tente novamente",
          })
        : false
    );
  };
  return (
    <Container>
      <form
        className="d-flex flex-column"
        onSubmit={handleSubmit(handleRegisterNewUser, handleError)}
      >
        <Input
          className="col-12"
          type="text"
          data-testid="name"
          label="Nome Completo"
          readOnly={allReadOnly}
          error={formState.errors.nomeCompleto}
          {...register("nomeCompleto", { required: true })}
        />

        <Input
          className="col-12"
          readOnly={allReadOnly}
          data-testid="email"
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
              data-testid="password"
              label="Senha"
              readOnly={allReadOnly}
              error={formState.errors.senha}
              {...register("senha", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              inputClassName="w-100"
              data-testid="confirm-password"
              type="password"
              label="Confirmar Senha"
              error={formState.errors.confirmarSenha}
              {...register("confirmarSenha", { required: true })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              data-testid="cpf"
              label="CPF"
              error={formState.errors.cpf}
              {...register("cpf", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              mask="99999-999"
              readOnly={allReadOnly}
              type="text"
              data-testid="cep"
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
              readOnly={allReadOnly}
              type="text"
              data-testid="street"
              label="Rua"
              error={formState.errors.rua}
              {...register("rua", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              label="Número"
              data-testid="streetNumber"
              error={formState.errors.numero}
              {...register("numero", { required: true })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              data-testid="city"
              label="Cidade"
              error={formState.errors.cidade}
              {...register("cidade", { required: true })}
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              readOnly={allReadOnly}
              type="text"
              data-testid="state"
              label="Estado"
              error={formState.errors.uf}
              {...register("uf", { required: true })}
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
