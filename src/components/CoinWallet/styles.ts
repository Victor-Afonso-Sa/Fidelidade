import { Card } from "antd";
import styled from "styled-components";

export const WalletCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  width: 95%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInRight;
  animation-duration: 1.2s;
  & .header {
    color: white;
    background-color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 0.5em;
  }
  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    & .content-coin {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28px;
    }
  }
`;
