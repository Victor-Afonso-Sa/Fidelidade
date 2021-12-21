// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { NewBuyContainer } from "./styles";
type Props = {};


export const NewBuyModal = (props: Props) => {
  const { register } = useForm();
  return (
    <NewBuyContainer>
      <h1 className="mb-5">Insira o CPF do cliente</h1>
      <Input
        register={register}
        name="cpf"
        label="CPF"
        type="text"
        mask="999.999.999-99"
      />
    </NewBuyContainer>
  );
};
