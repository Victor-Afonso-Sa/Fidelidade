// @flow
import * as React from "react";
import { MdMoreVert } from "react-icons/md";
import { PrimaryBtn } from "../../../styles/global";
import { CardsContainer } from "../styles";
import { BalanceBody, BalanceFooter, BalanceHeader, BalanceText, BalanceTitle } from "./styles";
type Props = {};


export const Balance = (props: Props) => {
  return (
    <CardsContainer>
      <BalanceHeader>
        <BalanceTitle>Carteira - Saldo</BalanceTitle>
        <MdMoreVert className="ms-auto" size={28}/>
      </BalanceHeader>
      <BalanceBody>
        <BalanceText>R$ 3,200.00</BalanceText>
      </BalanceBody>
      <BalanceFooter>
        <PrimaryBtn className="ms-auto">Transferir</PrimaryBtn>
      </BalanceFooter>
    </CardsContainer>
  );
};
