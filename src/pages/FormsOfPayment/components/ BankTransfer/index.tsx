import { TransferContainer } from "./styles";
import { Select } from "antd";
import MaskedInput from "antd-mask-input";
import { AntButton } from "../../../../styles/antDesign";

const { Option } = Select;

export const BankTransfer = () => {
  return (
    <div className="content-container pt-4 pb-4">
      <TransferContainer>
        <form>
          <div>
            <span className="text">Banco: </span>
          </div>
          <div>
            <Select defaultValue="bradesco">
              <Option value="bradesco">Bradesco</Option>
              <Option value="nubank">Nubank</Option>
              <Option value="santander">Santander</Option>
            </Select>
          </div>

          <div>
            <span className="text">Agência:</span>
          </div>
          <div>
            <MaskedInput mask="1111" type="text" id="agencia" name="agencia" />
          </div>

          <div>
            <span className="text">Conta:</span>
          </div>
          <div>
            <MaskedInput mask="1111111-1" type="text" id="conta" name="conta" />
          </div>

          <div>
            <span className="text">Tipo de conta a ser creditada:</span>
          </div>
          <div>
            <Select defaultValue="corrente">
              <Option value="corrente">Conta corrente</Option>
              <Option value="poupanca">Poupança</Option>
            </Select>
          </div>

          <div>
            <span className="text">Tipo de pessoa:</span>
          </div>
          <div>
            <Select defaultValue="fisica">
              <Option value="fisica">Pessoa Física</Option>
              <Option value="juridica">Pessoa Jurídica</Option>
            </Select>
          </div>

          <div>
            <span className="text">Nome:</span>
          </div>
          <div>
            <input type="text" id="nome" name="nome" />
          </div>

          <div>
            <span className="text">CPF/CNPJ:</span>
          </div>
          <div>
            <input type="text" id="cpfcnpj" name="cpfcnpj" />
          </div>

          <div>
            <span className="text">Valor:</span>
          </div>
          <div>
            <input type="number" id="valor" name="valor" />
          </div>

          <div>
            <span className="text">Finalidade:</span>
          </div>
          <div>
            <Select defaultValue="credito-conta">
              <Option value="credito-conta">01- Crédito em conta</Option>
              <Option value="outros">13- Outros</Option>
            </Select>
          </div>

          <div>
            <span className="text">Identificação da transferência:</span>
          </div>
          <div>
            <input type="text" id="identificacao" name="identificacao" />
          </div>
          <div className="transferir">
            <AntButton key="submit" type="primary" styled="success">
              Transferir
            </AntButton>
          </div>
        </form>
      </TransferContainer>
    </div>
  );
};
