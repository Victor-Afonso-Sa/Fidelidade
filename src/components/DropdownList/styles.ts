import styled from "styled-components";

export const DropdownListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`
export const DropdownItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1pt solid ${({ theme }) => theme.gray};
    margin: 10px;
    padding: 10px;
    cursor: pointer;
`
export const ItemTitle = styled.span`
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
`
export const ItemIcon = styled.span`
    color: ${({ theme }) => theme.gray};
    font-size: 24px;
`
export const Badge = styled.span`
    height: 24px;
    width: 24px;
    text-align: center;
    border: 0;
    padding: 1px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary};
    color: #fff;
`
