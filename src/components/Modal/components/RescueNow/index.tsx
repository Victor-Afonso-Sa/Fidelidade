import { useWallet } from "../../../../contexts/useWallet";
import { formatCurrencyPtBr } from "../../../../utils/formatCurrencyPtBr";

import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";

import { CashBackText } from "./style";

export const RescueNow = () => {
  const { coinsWallet, handleConvertCoinsToMoney, cashValue } = useWallet();

  return (
    <BaseModal
      label="Moedas"
      modalText="A cada 100 Moedas, você pode trocar por R$ 1,00."
      balance={<DisplayCoins amount={coinsWallet?.amount || 0} />}
      InputName="value"
      cashValue={<CashBackText>{formatCurrencyPtBr(cashValue)}</CashBackText>}
      onValueChange={handleConvertCoinsToMoney}
    />
  );
};
