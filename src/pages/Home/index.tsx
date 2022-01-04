import styled from "styled-components";
import { MenssageCard } from "../../components/Cards/MenssageCard";
import { Extract } from "../../components/Extract";
import { Header } from "../../components/Header";
import { MoneyWallet } from "../../components/MoneyWallet";
import { CoinWallet } from "./../../components/CoinWallet";
import ChartCoins from "./components/ChartCoins";
import { HomeCointainer, HomeWrapper } from "./styles";

export const Menssage = styled.span`
  text-align: center;
  font-weight: bold;
`;

export const Home = () => {
  return (
    <HomeCointainer>
      <Header name="'Nome e sobrenome'" />
      <HomeWrapper className="row mt-4 p-0 w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8 p-0">
          <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
            <MoneyWallet />
            <CoinWallet />
          </div>
          <ChartCoins />
        </div>
        <div className="col-12 col-md-4 p-0">
          <Extract />
          <div>
            <MenssageCard
              className="animate__fadeInRight"
              color="#fff"
              title="Sistema de Moedas"
              content={
                <Menssage>
                  No <span className="text__green">+Fidelidade</span>, você pode
                  recarregar as moedas para facilitar na hora da compra. Clique
                  nesse card para saber mais.
                </Menssage>
              }
            />
          </div>
        </div>
      </HomeWrapper>
    </HomeCointainer>
  );
};
