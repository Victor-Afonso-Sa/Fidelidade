import styled from "styled-components";

interface KeyTypeProps {
  active?: boolean;
}

export const Container = styled.div`
  .clickable {
    cursor: pointer;
  }
`;
export const PixContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 65%;
  border-radius: 5px;

  .pix-text {
    margin-left: 20px;
  }
  .delete-icon {
    margin-left: 50px;
    cursor: pointer;
  }

  .text {
    color: ${({ theme }) => theme.moneyColor};
  }
  .text-2 {
    color: #fff;
  }
  .new-key {
    color: #fff;
  }
`;

export const PixTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
  }
`;

export const NewKey = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
  }
  input {
    margin-top: 5px;
    width: 70%;
    outline: 0;
    border-width: 0 0 1px;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const KeyType = styled.div<KeyTypeProps>`
  background-color: ${(props) =>
    props.active ? `${props.theme.primary}` : `${props.theme.gray}`};
  border-radius: 12px;
  color: ${(props) => (props.active ? `#fff` : `${props.theme.primary}`)};
  font-size: 16px;
  cursor: pointer;
`;
