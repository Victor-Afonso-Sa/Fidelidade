import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

export const PrimaryBtn = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 0.5em 0.5em;
  font-weight: 600;
  border-radius: 4px;
`;

export const PrimaryBtnOutline = styled.button`
  background-color: #fff;
  color: ${({ theme }) => theme.primary};
  padding: 0.5em 0.5em;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.primary};
`;

export const DisabledBtn = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.gray};
  padding: 0.5em 0.5em;
  font-weight: 600;
  border-radius: 4px;
  border: 0;
  margin-left: 8px !important;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
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
