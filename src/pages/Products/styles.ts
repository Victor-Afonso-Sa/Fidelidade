import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  .table-image {
    height: 70px;
    width: 70px;
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    button + button {
      margin-left: 5px;
    }
    .delete-button {
      color: ${({ theme }) => theme.danger};
    }
  }
  .ACTIVE {
    color: ${({ theme }) => theme.success};
    font-weight: bold;
  }
  thead[class*="ant-table-thead"] th {
    background-color: ${({ theme }) => theme.background} !important;
  }
`;
