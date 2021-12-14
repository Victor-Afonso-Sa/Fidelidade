// @flow
import * as React from "react";

import { Header } from "../../components/Header";
import { Extrato } from "../../components/Extrato";
import { Wallet } from "../../components/Wallet";
import ReactEcharts from "echarts-for-react";
import { Balance } from "../../components/Cards/BalanceCard";
import { MenssageCard } from "../../components/Cards/MenssageCard";
import { theme } from "../../styles/theme";
import styled from "styled-components";
import { HomeCointainer } from "./styles";

export const Menssage = styled.span`
  text-align: center;
  font-weight: bold;
`

export const Home = () => {
  let chartOptions = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  return (
    <HomeCointainer>
      <Header name="'Nome e sobrenome'" />
      <div className="row mt-4 p-0 w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
            <Balance />
            <MenssageCard
              background={theme.primary}
              color="#fff"
              title="Sistema de Moedas"
              content={
                <Menssage>
                  No <span className="text__purple">+Fidelidade</span>, você pode recarregar as moedas para facilitar
                  na hora da compra. Clique nesse card para saber mais.
                </Menssage>
              }
            />
          </div>
          <div className="mx-auto">
            <ReactEcharts option={chartOptions} />
          </div>
        </div>
        <div className="col-12 col-md-4 ">
          <Wallet />
          <Extrato />
        </div>
      </div>
    </HomeCointainer>
  );
};
