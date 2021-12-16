import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgLogin};
`;
export const ContainerImg = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  border-right: 6pt solid ${({ theme }) => theme.primary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  & img {
    width: 70%;
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgLogin};
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
