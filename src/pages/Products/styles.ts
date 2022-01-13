import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  .table-image {
    height: 70px;
    width: 70px;
    border-radius: 4px;
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
    .edit-button {
      color: ${({ theme }) => theme.primary};
    }
    .add-button {
      color: ${({ theme }) => theme.primary};
    }
  }
  .ACTIVE {
    color: ${({ theme }) => theme.success};
    font-weight: bold;
  }
  .INACTIVE {
    color: ${({ theme }) => theme.danger};
    font-weight: bold;
  }
  thead[class*="ant-table-thead"] th {
    background-color: ${({ theme }) => theme.background} !important;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-bottom: 10px;
  input {
    width: 100%;
    border-right: none;
  }
  .search-button {
    margin-left: 2px;
    height: 55px;
  }
  .auto-complete {
    width: 100%;
  }
`;
