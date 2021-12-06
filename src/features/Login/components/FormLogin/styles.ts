import styled from "styled-components";

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
`
export const LoginButton = styled.button`
    width: 50%;
    text-align: center;
    align-self: flex-end;
    background-color: ${({ theme }) => theme.primary};
    border: 0;
    color: #fff;
    padding: 0.5em 0.2em;
    font-weight: 600;
    border-radius: 5px;
`
export const Title = styled.h2`
    color: ${({ theme }) => theme.primary};
`