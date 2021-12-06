// @flow
import * as React from "react";
import { SubTitle } from "../../styles/global";
import { DisplayCoins } from "../DisplayCoins";
import { ButtonClain, WalletCard } from "./styles";

type Props = {};
export const Wallet = (props: Props) => {
  return (
    <WalletCard>
      <div className="header">Moedas Araujo</div>
      <div className="content">
        <SubTitle>Você Possui:</SubTitle>
        <DisplayCoins amount="500" />
      </div>
      <ButtonClain>Resgatar</ButtonClain>
    </WalletCard>
  );
};
