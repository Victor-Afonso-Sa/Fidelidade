import { MdMoreVert } from "react-icons/md";

import { DisplayCoins } from "../../DisplayCoins";

import { formatCurrencyPtBr } from "../../../utils/formatCurrencyPtBr";

import { BalanceText, Button } from "../../../styles/global";
import { CardsContainer } from "../styles";
import {
  BalanceBody,
  BalanceFooter,
  BalanceHeader,
  BalanceTitle,
} from "./styles";

type Props = {
  className?: string;
  title: string;
  btnText: string;
  amount: number;
  isCoins?: boolean;
  action: any;
};

export const Balance = ({
  className,
  title,
  btnText,
  amount,
  isCoins = false,
  action,
}: Props) => {
  return (
    <CardsContainer className={className} hoverable>
      <BalanceHeader>
        <BalanceTitle>{title}</BalanceTitle>
        <MdMoreVert className="hoverable-icon ms-auto p-1" size={32} />
      </BalanceHeader>
      <BalanceBody>
        {isCoins ? (
          <DisplayCoins amount={amount} />
        ) : (
          <BalanceText>{formatCurrencyPtBr(amount)}</BalanceText>
        )}
      </BalanceBody>
      <BalanceFooter>
        <Button
          className="ms-auto mt-auto"
          type="button"
          styled="primary"
          outline
          onClick={() => action()}
        >
          {btnText}
        </Button>
      </BalanceFooter>
    </CardsContainer>
  );
};
