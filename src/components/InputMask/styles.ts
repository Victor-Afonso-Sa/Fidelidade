import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.primary};
  border: none;
  outline: none;
  box-shadow: none;

  label {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    padding-left: 0px;
  }

  .w-60 {
    width: 60%;
  }

  .cpf {
    text-align: center;
  }

  input {
    border: 1pt solid ${({ theme }) => theme.primary};
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1pt solid ${({ theme }) => theme.primary};
    padding-left: 5px !important;
    font-size: 1.2em;
    padding-top: 34px !important;
    padding-bottom: 4px !important;
    &:focus {
      background-color: transparent;
      border-bottom: 2pt solid ${({ theme }) => theme.primary};
      box-shadow: none;
    }
  }
`;
