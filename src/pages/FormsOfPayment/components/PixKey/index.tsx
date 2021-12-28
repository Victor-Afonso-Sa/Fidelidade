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
import { AntButton, AntModal } from "../../../../styles/antDesign";
import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import * as AlertService from "../../../../components/Alert";

export const PixKey = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [activeKeyType, setActiveKeyType] = useState<string>("cpf");
  const [canProceed] = useState(false);
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
      <AntModal
        title="Nova chave"
        centered
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setIsModalVisible(false);
            }}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            disabled={!canProceed}
            onClick={() => {
              setIsModalVisible(false);
              AlertService.presentAlert({
                type: "success",
                message: "Chave cadastrada com sucesso!",
              });
            }}
          >
            Cadastrar
          </AntButton>,
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
      </AntModal>
      <AntModal
        title="Nova chave"
        centered
        visible={modalDelete}
        onCancel={() => {
          setModalDelete(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setModalDelete(false);
            }}
          >
            Cancelar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            onClick={() => {
              setModalDelete(false);
              AlertService.presentAlert({
                type: "success",
                message: "Chave deletada com sucesso!",
              });
            }}
          >
            Deletar
          </AntButton>,
        ]}
      >
        Tem certeza que deseja deletar a chave?
      </AntModal>
    </Container>
  );
};
