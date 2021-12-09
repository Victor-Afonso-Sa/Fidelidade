// @flow 
import * as React from 'react';
import { CoinValue } from '../../styles/global';
import CoinSVG from "../../assets/Coin.svg";
import styled from 'styled-components';

type Props = {
    amount: string
};
const CoinWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & .content-coin-value {
      margin-left: 10px;
    }
`
export const DisplayCoins = ({ amount }: Props) => {
    return (
        <CoinWrapper>
            <img src={CoinSVG} alt="Moeda araujo" width="32" />
            <span className="content-coin-value"><CoinValue>{amount}</CoinValue></span>
        </CoinWrapper>
    );
};