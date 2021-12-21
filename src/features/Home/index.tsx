import { useState } from "react";
import styled from "styled-components";
import { Balance } from "../../components/Cards/BalanceCard";
import { MenssageCard } from "../../components/Cards/MenssageCard";
import Chart from "../../components/Chart";
import { Extrato } from "../../components/Extrato";
import { Header } from "../../components/Header";
import { Button } from "../../styles/global";
import { ChartContainer, HomeCointainer, HomeWrapper } from "./styles";
import { CoinWallet } from './../../components/CoinWallet/index';

export const Menssage = styled.span`
  text-align: center;
  font-weight: bold;
`;

export const Home = () => {
  const currencyValues: number[] = [];
  for (let idx = 0; idx < 30; idx++) {
    currencyValues.push(Math.floor(Math.random() * 200));
  }

  const coinValues: number[] = [];
  for (let idx = 0; idx < 30; idx++) {
    coinValues.push(Math.floor(Math.random() * 200));
  }

  const [chartButtons, setChartButtons] = useState([
    {
      label: "Ultimos 7 dias",
      selected: false,
    },
    {
      label: "Ultimos 15 dias",
      selected: true,
    },
    {
      label: "Ultimos 30 dias",
      selected: false,
    },
  ]);
  const [xChartValues, setxChartValues] = useState(
    createArrayOfDatesWithGivenNumber(15)
  );

  function chartAction(index: number) {
    switch (index) {
      case 0:
        setxChartValues(createArrayOfDatesWithGivenNumber(7));
        break;
      case 1:
        setxChartValues(createArrayOfDatesWithGivenNumber(15));
        break;
      case 2:
        setxChartValues(createArrayOfDatesWithGivenNumber(30));
        break;
    }
  }

  function createArrayOfDatesWithGivenNumber(numberOfDays: number): string[] {
    const datesList: string[] = [];
    for (let idx = 0; idx < numberOfDays; idx++) {
      const date = new Date();
      date.setDate(date.getDate() - idx);
      datesList.unshift(date.toDateString());
    }
    return datesList;
  }

  return (
    <HomeCointainer>
      <Header name="'Nome e sobrenome'" />
      <HomeWrapper className="row mt-4 p-0 w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8 p-0">
          <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
            <Balance className="w-100 animate__fadeInUp" title="Carteira - Saldo" btnText="Trocar para moedas"/>
            <CoinWallet />
          </div>
          <ChartContainer className="mb-3">
            <div className="d-flex justify-content-end p-3">
              {chartButtons.map((btnInfo, index) => {
                return (
                  <Button
                    key={index.toString()}
                    className={index === 1 ? "mx-3" : ""}
                    styled={"primary"}
                    outline={!btnInfo.selected}
                    onClick={() => {
                      btnInfo.selected = true;
                      chartButtons.forEach((btnInfo, btnIndex) => {
                        if (index !== btnIndex) {
                          btnInfo.selected = false;
                        }
                      });
                      setChartButtons((previousState) => {
                        return [...previousState];
                      });
                      chartAction(index);
                    }}
                  >
                    {btnInfo.label}
                  </Button>
                );
              })}
            </div>
            <Chart
              xAxisValues={xChartValues}
              coinValues={coinValues}
              currencyValues={currencyValues}
            />
          </ChartContainer>
        </div>
        <div className="col-12 col-md-4 p-0">
          <Extrato />
          <div>

          <MenssageCard
              className="animate__fadeInRight"
              color="#fff"
              title="Sistema de Moedas"
              content={
                <Menssage>
                  No <span className="text__green">+Fidelidade</span>, você
                  pode recarregar as moedas para facilitar na hora da compra.
                  Clique nesse card para saber mais.
                </Menssage>
              }
            />
          </div>
        </div>
      </HomeWrapper>
    </HomeCointainer>
  );
};
