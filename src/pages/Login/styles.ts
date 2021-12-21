import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
`;
export const ContainerImg = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray};
`;
export const LoginFooter = styled.div`
  position: absolute;
  bottom: 35px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  align-self: flex-end;
  animation: pulse;
  animation-duration: 2s;
  & a {
    color: ${({ theme }) => theme.primary};
  }
`;
