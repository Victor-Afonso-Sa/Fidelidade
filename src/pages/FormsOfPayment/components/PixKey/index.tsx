import {
  Container,
  KeyType,
  ModalContent,
  NewKey,
  PixContainer,
  PixTitle,
} from "./styles";
import { FaKey } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Modal, Button } from "antd";
import { useState } from "react";

export const PixKey = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [activeKeyType, setActiveKeyType] = useState<string>("cpf");
  return (
    <Container>
      <div className="content-container pt-4 pb-4">
        <PixContainer>
          <div>
            <FaKey color="#fff" size={20} />
          </div>
          <div className="pix-text">
            <div>
              <PixTitle>Chave Aleatória</PixTitle>
            </div>
            <div>
              <span className="text">Chave: </span>
              <span className="text-2">NÚMERO DA CHAVE</span>
            </div>
          </div>
          <div className="delete-icon" onClick={() => setModalDelete(true)}>
            <RiDeleteBin5Fill color="red" size={35} />
          </div>
        </PixContainer>
        <PixContainer
          className="mt-4 pt-2 pb-2 clickable"
          onClick={() => setIsModalVisible(true)}
        >
          <div className="new-key">Cadastrar chave</div>
        </PixContainer>
      </div>
      <Modal
        title="Nova chave"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(true)}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => setIsModalVisible(false)}
          >
            Cadastrar
          </Button>,
        ]}
      >
        <ModalContent>
          <h2>Selecione o tipo da chave pix</h2>
          <div className="d-flex flex-row gap-3">
            <KeyType
              active={activeKeyType === "cpf"}
              onClick={() => setActiveKeyType("cpf")}
              className="px-4 py-1"
            >
              CPF
            </KeyType>
            <KeyType
              active={activeKeyType === "email"}
              onClick={() => setActiveKeyType("email")}
              className="px-4 py-1"
            >
              E-mail
            </KeyType>
            <KeyType
              active={activeKeyType === "random"}
              onClick={() => setActiveKeyType("random")}
              className="px-4 py-1"
            >
              Aleatório
            </KeyType>
          </div>
        </ModalContent>
        <NewKey className="mt-4">
          <span>Chave:</span>
          <input
            type="text"
            name="new-key"
            id="new-key"
            placeholder="Entre com o valor da chave"
          />
        </NewKey>
      </Modal>
      <Modal
        title="Deletar chave"
        visible={modalDelete}
        onOk={() => setModalDelete(true)}
        onCancel={() => setModalDelete(false)}
        footer={[
          <Button key="back" onClick={() => setModalDelete(false)}>
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => setModalDelete(false)}
          >
            Deletar
          </Button>,
        ]}
      >
        Tem certeza que deseja deletar a chave?
      </Modal>
    </Container>
  );
};
