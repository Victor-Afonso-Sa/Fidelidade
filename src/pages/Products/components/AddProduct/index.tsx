import { Select } from "antd";
import { Input } from "../../../../components/Input";
import { CategoryWrapper, Container, Title } from "./styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PrimaryBtn } from "../../../../styles/global";
import { AiOutlinePlusSquare } from "react-icons/ai";

export const AddProduct = () => {
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
  return (
    <Container>
      <Title>Adicionar novo produto</Title>
      <form className="d-flex flex-column">
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

        <CategoryWrapper>
          <Autocomplete
            id="category"
            options={searchOptions}
            className="autocomplete"
            renderInput={(params) => (
              <TextField {...params} label="Categoria:" />
            )}
          />
          <AiOutlinePlusSquare size={18} className="add-category" />
        </CategoryWrapper>
        <div className="d-flex mt-3 justify-content-end float-end mb-4">
          <PrimaryBtn type="submit" className="">
            Adicionar
          </PrimaryBtn>
        </div>
      </form>
    </Container>
  );
};
