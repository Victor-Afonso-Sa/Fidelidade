// @flow
import * as React from "react";
import { InputMask } from "../../../../../components/InputMask";
import { NewBuyContainer } from "./styles";
type Props = {};

export const NewBuyModal = (props: Props) => {
  return (
    <NewBuyContainer>
      <h1 className="mb-5">Insira o CPF do cliente</h1>
      <InputMask
        name="cpf"
        label="CPF"
        placeholder="000.000.000-00"
        type="text"
        mask="999.999.999-99"
      />
    </NewBuyContainer>
  );
};
