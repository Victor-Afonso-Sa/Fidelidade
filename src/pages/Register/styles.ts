import styled from "styled-components";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
`;
export const RegisterLogoContainer = styled.div`
  background-color: #00000066;
  justify-content: center;
  align-items: center;
  & img {
    width: 70%;
  }
`;
export const RegisterFormContainer = styled.div`
  height: 100%;
`;
export const FormHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  color: #fff !important;
  h4,
  h5 {
    color: #fff !important;
  }
`;
