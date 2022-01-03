import { CoinValue } from "../../styles/global";
import CoinSVG from "../../assets/coin.svg";

import { CoinWrapper } from "./styles";

type Props = {
  amount: number;
};

export const DisplayCoins = ({ amount }: Props) => {
  return (
    <CoinWrapper>
      <img src={CoinSVG} alt="Moeda araujo" width="44" />
      <span className="content-coin-value">
        <CoinValue>{amount}</CoinValue>
      </span>
    </CoinWrapper>
  );
};
