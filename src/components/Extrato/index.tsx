// @flow
import * as React from "react";
import { ExtratoItem } from "../ExtratoItem";
import { ExtratoCard } from "./styles";

type Props = {};

export const Extrato = (props: Props) => {
  return (
    <ExtratoCard>
      <div className="header">
        <h6 className="text-center">Histórico de Transações</h6>
      </div>
      <div className="extrato-transactions">
        <ExtratoItem amount={"5,00"} date="01/12/2021" />
        <ExtratoItem amount={"5,00"} date="01/12/2021" />
        <ExtratoItem amount={"5,00"} date="01/12/2021" />
      </div>
    </ExtratoCard>
  );
};
