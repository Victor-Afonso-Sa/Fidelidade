import styled from "styled-components";

export const TransferContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 70%;
  border-radius: 5px;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
  }
  input {
    width: 70%;
    outline: 0;
    border-width: 0 0 1px;
    border-color: ${({ theme }) => theme.primary};
  }
  form {
    background-color: #fff;
    padding: 20px;
    width: 100%;
    div + div {
      margin-top: 10px;
    }
    .transferir {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .text {
    color: ${({ theme }) => theme.primary};
  }
`;
