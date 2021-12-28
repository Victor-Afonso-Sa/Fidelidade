import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useWallet } from "../../../../contexts/useWallet";

import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";

import { formatCurrencyPtBr } from "../../../../utils/formatCurrencyPtBr";

import { CashBackText } from "./style";

export const RescueNow = () => {
  const { coinsWallet } = useWallet();
  const [cashValue, setCashValue] = useState(formatCurrencyPtBr(0));

  const handleConvertToMoney = useCallback(
    (value: string) => {
      if (coinsWallet && coinsWallet.amount < Number(value)) {
        toast.warning("Saldo insuficiente");
        return;
      }

      setCashValue(formatCurrencyPtBr(value ? parseInt(value) / 100 : 0 / 100));
    },
    [coinsWallet]
  );

  return (
    <BaseModal
      label="Moedas"
      modalText="A cada 100 Moedas, você pode trocar por R$ 1,00."
      balance={<DisplayCoins amount={coinsWallet?.amount || 0} />}
      InputName="value"
      cashValue={<CashBackText>{cashValue}</CashBackText>}
      onValueChange={handleConvertToMoney}
    />
  );
};
