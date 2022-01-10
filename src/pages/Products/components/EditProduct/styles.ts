import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  label {
    color: ${({ theme }) => theme.primary};
    padding-left: 0px;
    margin-bottom: 5px;
  }
  .product-image {
    height: 100px;
    width: 150px;
    border-radius: 4px;
  }
  .edit-icon {
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;
