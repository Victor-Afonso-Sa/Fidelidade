// @flow
import * as React from "react";
import { SubTitle } from "../../styles/global";
import { ExtratoItem } from "../ExtratoItem";
import { ExtratoCard } from "./styles";

type Props = {};
export const Extrato = (props: Props) => {
  return (
    <ExtratoCard>
      <SubTitle>Histórico de Transações</SubTitle>
      <div className="extrato-transactions">
        <ExtratoItem amount={"5,00"} date="01/12/2021" />
        <ExtratoItem amount={"5,00"} date="01/12/2021" />
      </div>
    </ExtratoCard>
  );
};
