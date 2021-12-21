// @flow
import * as React from "react";
import { MdMoreVert } from "react-icons/md";
import { Button } from "../../../styles/global";
import { DisplayCoins } from "../../DisplayCoins";
import { CardsContainer } from "../styles";
import {
  BalanceBody,
  BalanceFooter,
  BalanceHeader,
  BalanceText,
  BalanceTitle,
} from "./styles";
type Props = {
  className?: string;
  title: string;
  btnText: string;
  isCoins?: boolean;
  action?: any;
};

export const Balance = ({
  className,
  title,
  btnText,
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
          <DisplayCoins amount={100} />
        ) : (
          <BalanceText>R$ 200.00</BalanceText>
        )}
      </BalanceBody>
      <BalanceFooter>
        <Button
          className="ms-auto mt-auto"
          type="button"
          styled="primary"
          outline
          onClick={() => (action ? action() : () => {})}
        >
          {btnText}
        </Button>
      </BalanceFooter>
    </CardsContainer>
  );
};
