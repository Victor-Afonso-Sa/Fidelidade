import styled from "styled-components";


export const ExtratoCard = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLogin};
  width: 95%;
  border-radius: 5px;
  margin-left: auto;
  padding: 20px;
  align-items: center;
  & .extrato-transactions {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
