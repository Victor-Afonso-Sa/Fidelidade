import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
body {
    background-color: #fff;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Roboto', sans-serif;
  }
  `;
export const SubTitle = styled.h6`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;
export const CoinValue = styled.span`
  font-size: 32px;
  color: #fff;
  font-weight: 1000;
  line-height: 56px;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  text-align: center;
  font-variant: small-caps;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.primary};
`;
export const Row = styled.div`
    display: flex;
`