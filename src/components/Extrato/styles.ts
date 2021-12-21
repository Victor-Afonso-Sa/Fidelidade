import { Card } from "antd";
import styled from "styled-components";

export const ExtratoCard = styled(Card)`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  width: 95%;
  animation: fadeInRight;
  animation-duration: 1.2s;
  align-items: center;
  & .ant-card-body {
    width: 100%;
  }
  & .extrato-transactions {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  & .header {
    color: #fff;
    padding: 15px;
    background: ${({ theme }) => theme.secondary};
    h6 {
      color: #fff;
      margin: 0;
      letter-spacing: 0.1em;
    }
  }
`;
