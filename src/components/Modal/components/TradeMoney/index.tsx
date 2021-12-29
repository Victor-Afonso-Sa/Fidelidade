import { useWallet } from "../../../../contexts/useWallet";

import { DisplayCoins } from "../../../DisplayCoins";
import { BaseModal } from "../BaseModal";

import { BalanceText } from "../../../../styles/global";
import { BgCoinvalue } from "./styles";

export const TradeMoney = () => {
  const { moneyWallet, handleConvertMoneyToCoin, coinsValue } = useWallet();

  return (
    <BaseModal
      label="Quantidade"
      mask="99,99"
      modalText="A cada R$ 1,00, você pode trocar por 100 Moedas."
      balance={
        <BalanceText>
          {moneyWallet?.amountFormatted
            ? moneyWallet.amountFormatted
            : "R$ 0,00"}
        </BalanceText>
      }
      InputName="value"
      cashValue={
        <BgCoinvalue>
          <DisplayCoins amount={coinsValue} />
        </BgCoinvalue>
      }
      onValueChange={handleConvertMoneyToCoin}
    />
  );
};
