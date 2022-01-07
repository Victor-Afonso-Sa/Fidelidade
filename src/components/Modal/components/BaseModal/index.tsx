import {
  ArrowRightIcon,
  BalanceText,
  InformationLineIcon,
  RuleSystemText,
  SecondaryBg,
} from "../RescueNow/style";

import { InputWrapper } from "./styles";

type Props = {
  modalText: string;
  balance: any;
  InputName: string;
  cashValue: any;
  onValueChange?: any;
  label: string;
  mask?: string;
};

export const BaseModal = ({
  modalText,
  balance,
  onValueChange,
  cashValue,
  mask,
  label,
}: Props) => {
  return (
    <div className="d-flex flex-column m-4 h-100" data-testid="base-modal">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <InformationLineIcon className="d-64"></InformationLineIcon>
          <RuleSystemText>{modalText}</RuleSystemText>
        </div>
        <SecondaryBg className="d-flex justify-content-center p-4">
          <div className="d-flex align-items-center justify-content-center">
            <BalanceText className="d-flex align-items-center">
              Você possui:
            </BalanceText>
            <div className="d-flex align-items-center">{balance}</div>
          </div>
        </SecondaryBg>
        <div className="d-flex align-items-center justify-content-around pt-2 my-2">
          <InputWrapper>
            <div className="form-floating mb-3">
              <input
                autoFocus
                autoComplete="false"
                type="number"
                name="amount"
                onChange={(e) => onValueChange(e.target.value)}
                className="form-control"
              />
              <label htmlFor="amount">{label}</label>
            </div>
          </InputWrapper>
          <ArrowRightIcon className="d-32 mx-1" />
          {cashValue}
        </div>
      </div>
    </div>
  );
};
