import { useState } from "react";
import { useForm } from "react-hook-form";
import { useWallet } from "../../../../contexts/useWallet";
import { formatCurrencyPtBr } from "../../../../utils/formatCurrencyPtBr";
import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";
import { CashBackText } from "./style";

interface RescueNowModel {
  value?: number;
  emitter?(value: any): any;
}

export const RescueNow = ({ value = 0, emitter }: RescueNowModel) => {
  const { coinsWallet } = useWallet();
  const [cashValue, setCashValue] = useState(formatCurrencyPtBr(0));
  const { register } = useForm();

  const onValueChange = (value: string) => {
    setCashValue(formatCurrencyPtBr(value ? parseInt(value) / 100 : 0 / 100));
    if (emitter) {
      const aux = parseInt(value);
      aux && aux !== 0 ? emitter(true) : emitter(false);
    }
  };

  return (
    <BaseModal
      label="Moedas"
      modalText="A cada 100 Moedas, você pode trocar por R$ 1,00."
      balance={<DisplayCoins amount={coinsWallet?.amount || 0} />}
      InputName="value"
      cashValue={<CashBackText>{cashValue}</CashBackText>}
      register={register}
      onValueChange={onValueChange}
    />
  );
};

RescueNow.defaultProps = {
  value: 0,
};
