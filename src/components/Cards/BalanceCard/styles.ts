import styled from "styled-components";

export const BalanceHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
`;
export const BalanceTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  margin: 0;
`;
export const BalanceBody = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 15px;
`;
export const BalanceFooter = styled.div`
   display: flex;
   align-items: center;
   margin-top: 10px;
`;
export const BalanceText = styled.h1`
   color: ${({ theme }) => theme.moneyColor};
   font-weight: bold;
`;