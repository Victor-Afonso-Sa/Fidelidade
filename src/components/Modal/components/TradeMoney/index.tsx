// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { BaseModal } from "../BaseModal";
type Props = {
  value?: number;
  emitter?(value: any): any;
};
export const TradeMoney = ({ value, emitter }: Props) => {
  const [coinValue, setCoin] = React.useState(0);
  const { register } = useForm();
  const onValueChange = (value: string) => {
    setCoin(parseInt(value));
    if (emitter) {
      const aux = parseInt(value);
      aux && aux !== 0 ? emitter(true) : emitter(false);
    }
  };
  return (
    <BaseModal
      label="Moedas"
      modalText="A cada 100 Moedas, você pode trocar por R$ 1,00."
      balance={<h2>R$ 300,00</h2>}
      InputName="value"
      cashValue={`${coinValue}`}
      register={register}
      onValueChange={onValueChange}
    />
  );
};
