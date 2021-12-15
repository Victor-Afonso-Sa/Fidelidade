import styled from "styled-components";

export const SumarryWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 15px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`;
export const CardContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  & .label {
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
  }
`;
export const SummaryCardWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const TotalValue = styled.div`
  border: 1pt solid ${({ theme }) => theme.moneyColor};
  font-size: 40px;
  color: ${({ theme }) => theme.moneyColor};
  padding: 0 20px;
`;
export const RightCardWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
`;
export const InputContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`