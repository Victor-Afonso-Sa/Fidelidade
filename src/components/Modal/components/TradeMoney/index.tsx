// @flow
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useWallet } from "../../../../contexts/useWallet";

import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";

import { BalanceText } from "../../../../styles/global";
import { BgCoinvalue } from "./styles";

type Props = {
  value?: number;
  emitter?(value: any): any;
};

export const TradeMoney = ({ value, emitter }: Props) => {
  const { moneyWallet } = useWallet();
  const [coinValue, setCoin] = useState(0);

  const { register } = useForm();

  const onValueChange = (value: string) => {
    setCoin(value ? parseInt(value) * 100 : 0);
    if (emitter) {
      const aux = parseInt(value);
      aux && aux !== 0 ? emitter(true) : emitter(false);
    }
  };

  return (
    <BaseModal
      label="Quantidade"
      mask="99,99"
      modalText="A cada R$ 1,00, você pode trocar por 100 Moedas."
      balance={<BalanceText>{moneyWallet?.amountFormatted}</BalanceText>}
      InputName="value"
      cashValue={
        <BgCoinvalue>
          <DisplayCoins amount={coinValue} />
        </BgCoinvalue>
      }
      register={register}
      onValueChange={onValueChange}
    />
  );
};
