// @flow
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { PrimaryBtn, Row } from "../../styles/global";
import { RegisterType, CepType} from "../../types/RegisterTypes";

type Props = {
    onSubmit: any
    btnText: string
    allReadOnly?: boolean ;
};

export const RegisterForm = ({ onSubmit, btnText, allReadOnly=false }: Props) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="nome"
        register={register}
        type="text"
        label="Nome Completo"
        readOnly={allReadOnly}
      />
      <Input readOnly={allReadOnly} name="email" register={register} type="email" label="Email" />
      <Row className="justify-content-between">
        <Input
          inputClassName="w-100"
          name="password"
          register={register}
          type="password"
          label="Senha"
          readOnly={allReadOnly}
        />
        <Input
          readOnly={allReadOnly}
          className="ms-5"
          inputClassName="w-100"
          name="confirmPassword"
          register={register}
          type="password"
          label="Confirmar Senha"
        />
      </Row>
      <Row className="justify-content-between">
        <Input
          readOnly={allReadOnly}
          name="cpf"
          register={register}
          type="text"
          label="CPF"
          mask="999.999.999-99"
        />
        <Input
          readOnly={allReadOnly}
          className="ms-5"
          name="cep"
          register={register}
          type="text"
          label="CEP"
          mask="99999-999"
          customOnChange={(cep: string) => getAddress(cep)}
        />
      </Row>
      <Row className="justify-content-between col-12">
        <Input
          name="rua"
          register={register}
          type="text"
          label="Rua"
          readOnly
        />
        <Input
          readOnly={allReadOnly}
          className="ms-5"
          name="numero"
          register={register}
          type="text"
          label="Número"
        />
      </Row>
      <Row className="justify-content-between">
        <Input
          name="cidade"
          register={register}
          type="text"
          label="Cidade"
          readOnly
        />
        <Input
          className="ms-5"
          name="uf"
          register={register}
          type="text"
          label="Estado"
          readOnly
        />
      </Row>
      <PrimaryBtn type="submit" className="float-end">{ btnText }</PrimaryBtn>
    </form>
  );
};
