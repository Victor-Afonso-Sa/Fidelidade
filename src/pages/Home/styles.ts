import styled from "styled-components";

export const HomeCointainer = styled.div`
  height: 100vh;
`;
export const HomeWrapper = styled.div`
  --bs-gutter-x: 0;
`;

export const ChartContainer = styled.div`
  margin: 0 10px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  animation: fadeInUp;
  animation-duration: 1.2s;
`;

