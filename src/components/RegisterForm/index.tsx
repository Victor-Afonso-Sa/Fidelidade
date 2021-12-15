// @flow
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { PrimaryBtn } from "../../styles/global";
import { CepType, RegisterType } from "../../types/RegisterTypes";
import { Input } from "../Input";

type Props = {
  onSubmit: any;
  btnText: string;
  allReadOnly?: boolean;
};

export const RegisterForm = ({
  onSubmit,
  btnText,
  allReadOnly = false,
}: Props) => {
  const { register, setValue, handleSubmit } = useForm<RegisterType>();
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

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="col-12"
        name="nome"
        register={register}
        type="text"
        label="Nome Completo"
        readOnly={allReadOnly}
      />
      <Input
        className="col-12"
        readOnly={allReadOnly}
        name="email"
        register={register}
        type="email"
        label="Email"
      />
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            inputClassName="w-100"
            name="password"
            register={register}
            type="password"
            label="Senha"
            readOnly={allReadOnly}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            inputClassName="w-100"
            name="confirmPassword"
            register={register}
            type="password"
            label="Confirmar Senha"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            name="cpf"
            register={register}
            type="text"
            label="CPF"
            mask="999.999.999-99"
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            name="cep"
            register={register}
            type="text"
            label="CEP"
            mask="99999-999"
            customOnChange={(cep: string) => getAddress(cep)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            name="rua"
            register={register}
            type="text"
            label="Rua"
            readOnly
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            readOnly={allReadOnly}
            name="numero"
            register={register}
            type="text"
            label="Número"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Input
            name="cidade"
            register={register}
            type="text"
            label="Cidade"
            readOnly
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            name="uf"
            register={register}
            type="text"
            label="Estado"
            readOnly
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
