import styled from "styled-components";

export const NewBuyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 32px;
  box-shadow: 0px 0px 4px 0px gray;
`;