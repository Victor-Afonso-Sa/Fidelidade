// @flow
import * as React from 'react';
import { CoinValue } from '../../styles/global';
import CoinSVG from "../../assets/coin.svg";
import styled from 'styled-components';

type Props = {
    amount: number
};
const CoinWrapper = styled.div`
    height: 68px;
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
            <img src={CoinSVG} alt="Moeda araujo" width="44" />
            <span className="content-coin-value"><CoinValue>{amount}</CoinValue></span>
        </CoinWrapper>
    );
};