import { Container } from "./styles";
import { Table, Button, Input } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { AntButton, AntModal } from "../../styles/antDesign";
import * as AlertService from "../../components/Alert";
import { useState } from "react";
import { theme } from "../../styles/theme";

export const Products = () => {
  const [modalEditar, setModalEditar] = useState<boolean>(false);
  const [modalExcluir, setModalExcluir] = useState<boolean>(false);
  const [codigoAcao, setCodigoAcao] = useState<number>();
  const dataSource = [
    {
      sku: 0,
      name: "Produto teste",
      description: "Um produto de teste",
      photopath:
        "https://veja.abril.com.br/wp-content/uploads/2020/12/TITANIC-FUNDO-DO-MAR-CAPSULA-TITAN-1.jpg",
      price: 2.5,
      inventoryQuantity: 1,
      status: "ACTIVE",
      actions: "",
    },
    {
      sku: 1,
      name: "Produto 2",
      description: "Um produto de teste",
      photopath:
        "https://veja.abril.com.br/wp-content/uploads/2020/12/TITANIC-FUNDO-DO-MAR-CAPSULA-TITAN-1.jpg",
      price: 2.5,
      inventoryQuantity: 1,
      status: "ACTIVE",
      actions: "",
    },
  ];
  const columns = [
    {
      title: "Foto:",
      dataIndex: "photopath",
      key: "photopath",
      render: (dataIndex: string) => (
        <img src={dataIndex} alt="" className="table-image" />
      ),
    },
    {
      title: "Código SKU:",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Nome do produto:",
      dataIndex: "name",
      key: "name",
      filterDropdown: () => {
        return <Input />;
      },
      filterIcon: () => {
        return <BsSearch color={theme.primary} />;
      },
    },
    {
      title: "Descrição:",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Valor:",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantidade em estoque:",
      dataIndex: "inventoryQuantity",
      key: "inventoryQuantity",
    },
    {
      title: "Status:",
      dataIndex: "status",
      key: "status",
      render: (status: any) => {
        return (
          <div className={status}>
            {status === "ACTIVE" ? "Ativo" : "Inativo"}
          </div>
        );
      },
    },
    {
      title: "Ações:",
      dataIndex: "sku",
      key: "actions",
      render: (sku: number) => {
        return (
          <div className="btn-wrapper">
            <Button
              type="primary"
              onClick={() => {
                {
                  setModalEditar(true);
                  setCodigoAcao(sku);
                }
              }}
            >
              Editar
            </Button>
            <Button
              className="delete-button"
              onClick={() => {
                {
                  setModalExcluir(true);
                  setCodigoAcao(sku);
                }
              }}
              icon={<AiTwotoneDelete />}
            />
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      <Table dataSource={dataSource} columns={columns} bordered />;
      <AntModal
        title="Editar produto"
        centered
        visible={modalEditar}
        onCancel={() => {
          setModalEditar(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setModalEditar(false);
            }}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            onClick={() => {
              setModalEditar(false);
              AlertService.presentAlert({
                type: "success",
                message: "Produto editado com sucesso!",
              });
            }}
          >
            Atualizar
          </AntButton>,
        ]}
      >
        Modal editar {codigoAcao}
      </AntModal>
      <AntModal
        title="Excluir produto"
        centered
        visible={modalExcluir}
        onCancel={() => {
          setModalExcluir(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setModalExcluir(false);
            }}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="danger"
            onClick={() => {
              setModalExcluir(false);
              AlertService.presentAlert({
                type: "success",
                message: "Produto excluído com sucesso!",
              });
            }}
          >
            Excluir
          </AntButton>,
        ]}
      >
        Modal excluir {codigoAcao}
      </AntModal>
    </Container>
  );
};
