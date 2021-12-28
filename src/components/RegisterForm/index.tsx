// @flow
import axios from "axios";
import * as yup from "yup";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import * as AlertService from "../../components/Alert";

import { Input } from "../Input";
import { CepType, RegisterType } from "../../types/RegisterTypes";

import { PrimaryBtn } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const { register, setValue, handleSubmit, formState } = useForm<RegisterType>(
    {
      resolver: yupResolver(schema),
    }
  );

  const handleRegisterNewUser: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
  };

  const getAddress = (cep: string) => {
    console.log(cep);
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
    <form
      className="d-flex flex-column"
      onSubmit={handleSubmit(handleRegisterNewUser, handleError)}
    >
      <Input
        className="col-12"
        type="text"
        label="Nome Completo"
        readOnly={allReadOnly}
        error={formState.errors.nomeCompleto}
        {...register("nomeCompleto", { required: true })}
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
            error={formState.errors.senha}
            {...register("senha", { required: true })}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            inputClassName="w-100"
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
            label="CPF"
            mask="999.999.999-99"
            error={formState.errors.cpf}
            {...register("cpf", { required: true })}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            type="text"
            label="CEP"
            mask="99999-999"
            register={register}
            customOnChange={(cep: string) => getAddress(cep)}
            error={formState.errors.cep}
            {...register("cep", { required: true })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            type="text"
            label="Rua"
            readOnly
            error={formState.errors.rua}
            {...register("rua", { required: true })}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            type="text"
            label="Número"
            error={formState.errors.numero}
            {...register("numero", { required: true })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            type="text"
            label="Cidade"
            readOnly
            error={formState.errors.cidade}
            {...register("cidade", { required: true })}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            type="text"
            label="Estado"
            readOnly
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
  );
};
