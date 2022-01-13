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
    width: 20%;
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
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 80%;
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

export const WrapperRecebimento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo-pix {
    height: 30px;
    width: 30px;
    margin-top: -5px;
  }
  min-width: 400px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-right: 10px;
  font-size: 17px;
  font-weight: bold;
`;

export const Type = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Saldo = styled.div`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: #fff;
  header {
    width: 100%;
    font-size: 12px;
  }
  div {
    font-size: 28px;
  }
`;
