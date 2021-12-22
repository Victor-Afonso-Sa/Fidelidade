// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { BalanceText } from "../../../../styles/global";
import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";
import { BgCoinvalue } from "./styles";
type Props = {
  value?: number;
  emitter?(value: any): any;
};
export const TradeMoney = ({ value, emitter }: Props) => {
  const [coinValue, setCoin] = React.useState(0);
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
      balance={<BalanceText>R$ 200.00</BalanceText>}
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
