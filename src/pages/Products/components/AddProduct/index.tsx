import { Select } from "antd";
import { Input } from "../../../../components/Input";
import { Container, Title } from "./styles";

export const AddProduct = () => {
  const { Option } = Select;
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

        <label>Categoria:</label>
        <Select defaultValue="higiene_pessoal" className="col-12 w-100">
          <Option value="higiene_pessoal">Higiene Pessoal</Option>
          <Option value="congelados">Congelados</Option>
          <Option value="farmacos">Farmacos</Option>
        </Select>
      </form>
    </Container>
  );
};
