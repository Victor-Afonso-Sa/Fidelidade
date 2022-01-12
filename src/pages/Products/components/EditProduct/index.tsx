import { Select } from "antd";
import { Input } from "../../../../components/Input";
import { Container, Title } from "./styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PrimaryBtn } from "../../../../styles/global";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

export const EditProduct = () => {
  const { Option } = Select;
  const searchOptions = [
    {
      label: "Higiene Pessoal",
      name: "Higiene Pessoal",
      description: "Produtos de Higiene pessoal",
    },
    {
      label: "Farmacos",
      name: "Farmacos",
      description: "Farmacos em geral",
    },
    {
      label: "Xaropes",
      name: "Xaropes",
      description: "Xaropes em geral",
    },
    {
      label: "Bebidas",
      name: "Bebidas",
      description: "Bebidas",
    },
  ];
  const { sku } = useParams();

  useEffect(() => {
    console.log("Codigo: ", sku);
  }, [sku]);
  return (
    <Container>
      <Title>Editar produto</Title>
      <form className="d-flex flex-column">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src="https://veja.abril.com.br/wp-content/uploads/2020/12/TITANIC-FUNDO-DO-MAR-CAPSULA-TITAN-1.jpg"
              alt=""
              className="product-image"
            />
            <div className="edit-icon">
              <AiFillEdit size={20} />
            </div>
          </div>
        </div>
        <Input className="col-12" type="text" name="sku" label="Código Sku" />

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="text"
              label="Nome do Produto:"
              name="name"
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="description"
              label="Descrição"
              name="description"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="text"
              label="URL da foto do produto:"
              name="photoPath"
            />
          </div>
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="number"
              label="Preço"
              name="price"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <label>Status:</label>
            <Select defaultValue="active" className="w-100">
              <Option value="active">Ativo</Option>
              <Option value="inactive">Inativo</Option>
            </Select>
          </div>
          <div className="col-12 col-md-6">
            <Input
              inputClassName="w-100"
              type="number"
              label="Preço"
              name="price"
            />
          </div>
        </div>

        <Autocomplete
          id="category"
          options={searchOptions}
          renderInput={(params) => <TextField {...params} label="Categoria:" />}
        />
        <div className="d-flex mt-3 justify-content-end float-end mb-4">
          <PrimaryBtn type="submit" className="">
            Salvar
          </PrimaryBtn>
        </div>
      </form>
    </Container>
  );
};
