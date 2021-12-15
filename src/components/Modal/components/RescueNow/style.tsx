import styled from "styled-components";
import { RiInformationLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export const CoinText = styled.span`
  color: white;
  font-size: 3em;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.primary};
`;

export const BalanceText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};
  margin-right: 8px;
`;

export const SecondaryBg = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const RuleSystemText = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

export const InformationLineIcon = styled(RiInformationLine)`
  color: ${({ theme }) => theme.primary};
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  color: ${({ theme }) => theme.moneyColor};
`;

export const CashBackText = styled.span`
  color: white;
  font-size: 3em;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.moneyColor};
  border: 2px solid ${({ theme }) => theme.moneyColor};
  border-radius: 8px;
  padding: 10px ;
  @media screen and (max-width: 576px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 340px) {
    font-size: 1.2em;
  }
`;
