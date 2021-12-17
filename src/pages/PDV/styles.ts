import styled from "styled-components";

export const ContentWrapper = styled.div`
  height: calc(100vh - 70px);
  width: calc(100vw - 80px);
  background-color: ${({ theme }) => theme.bgLogin};
`;
