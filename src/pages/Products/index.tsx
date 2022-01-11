import { Container, SearchWrapper } from "./styles";
import { Table, Button, ConfigProvider, Empty } from "antd";
import {
  AiOutlineEdit,
  AiOutlinePlusSquare,
  AiTwotoneDelete,
} from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";
import { AntButton, AntModal } from "../../styles/antDesign";
import * as AlertService from "../../components/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const Products = () => {
  const navigate = useNavigate();
  const [modalExcluir, setModalExcluir] = useState(false);
  const [codigoAcao, setCodigoAcao] = useState<number>();

  function openModalDelete(sku: number) {
    setModalExcluir(true);
    setCodigoAcao(sku);
  }

  function onDelete() {
    setModalExcluir(false);
    AlertService.presentAlert({
      type: "success",
      message: "Produto excluído com sucesso!",
    });
  }

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
      label: "Produto teste",
    },
    {
      sku: 1,
      name: "Produto 2",
      description: "Um produto de teste",
      photopath:
        "https://veja.abril.com.br/wp-content/uploads/2020/12/TITANIC-FUNDO-DO-MAR-CAPSULA-TITAN-1.jpg",
      price: 2.5,
      inventoryQuantity: 1,
      status: "INACTIVE",
      actions: "",
      label: "Produto 2",
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
              className="add-button"
              icon={<AiOutlinePlusSquare size={23} />}
              onClick={() => navigate("/pdv/produtos/adicionar")}
            />

            <Button
              className="edit-button"
              icon={<AiOutlineEdit size={23} />}
              onClick={() => navigate(`/pdv/produtos/editar/${sku}`)}
            />

            <Button
              className="delete-button"
              onClick={() => openModalDelete(sku)}
              icon={<AiTwotoneDelete size={23} />}
            />
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      <SearchWrapper>
        <Autocomplete
          id="category"
          options={dataSource}
          className="auto-complete"
          renderInput={(params) => (
            <TextField {...params} label="Procurar produto:" />
          )}
        />
        <Button type="primary" className="search-button" name="search">
          Pesquisar
        </Button>
      </SearchWrapper>
      <ConfigProvider
        renderEmpty={() => (
          <Empty
            description={
              <>
                <p>Nenhum produto cadastrado, clique aqui para adicionar:</p>
                <Button
                  className="add-button"
                  icon={<AiOutlinePlusSquare size={23} />}
                  onClick={() => {
                    navigate("/pdv/produtos/adicionar");
                  }}
                />
              </>
            }
          />
        )}
      >
        <Table dataSource={dataSource} columns={columns} bordered />;
      </ConfigProvider>

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
            onClick={() => onDelete()}
          >
            Excluir
          </AntButton>,
        ]}
      >
        <p>Tem certeza que deseja excluir o produto de código: {codigoAcao}?</p>
      </AntModal>
    </Container>
  );
};
