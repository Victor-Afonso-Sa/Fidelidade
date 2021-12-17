import styled from "styled-components";

export const WalletCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLogin};
  width: 95%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-bottom: 10px;
  & .header {
    color: white;
    background-color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    margin: 8px;
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

export const ButtonClain = styled.button`
  width: 98%;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  background-color: #fff;
  border: 2pt solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  padding: 0.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;
