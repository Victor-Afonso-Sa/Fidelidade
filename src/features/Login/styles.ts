import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    background-color: ${( { theme } ) => theme.bgLogin};
`
export const ContainerImg = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
    border-right: 6pt solid ${( { theme } ) => theme.primary};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`
export const  ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${( { theme } ) => theme.bgLogin};
`