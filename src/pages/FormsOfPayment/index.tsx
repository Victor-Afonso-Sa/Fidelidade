import {
  Content,
  PaymentWrapper,
  Payment,
  Title,
  PixKey,
  PixTitle,
} from "./styles";
import { theme } from "../../styles/theme";
import { BsBank2 } from "react-icons/bs";
import Pix from "../../assets/pix.png";
import { FaKey } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";

export const FormsOfPayment = () => {
  const [formOfPayment, setFormOfPayment] = useState<string>("pix");
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <Content>
          <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
            <PaymentWrapper>
              <Payment
                color={theme.primary}
                onClick={() => setFormOfPayment("pix")}
                active={formOfPayment === "pix" ? true : false}
              >
                <Title>PIX</Title>
                <img src={Pix} alt="Logo pix" className="pix" />
              </Payment>
              <Payment
                color={theme.primary}
                onClick={() => setFormOfPayment("ted")}
                active={formOfPayment === "ted" ? true : false}
              >
                <Title color={theme.primary}>TED</Title>
                <BsBank2 color={theme.primary} />
              </Payment>
            </PaymentWrapper>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-4">
            {formOfPayment === "pix" && (
              <PixKey>
                <div>
                  <FaKey color="#fff" />
                </div>
                <div className="pix-text">
                  <div>
                    <PixTitle>TEXTO</PixTitle>
                  </div>
                  <div>
                    <span className="text">Chave: </span>
                    <span className="text-2">NÚMERO DA CHAVE</span>
                  </div>
                </div>
                <div className="delete-icon">
                  <RiDeleteBin5Fill color="red" size={35} />
                </div>
              </PixKey>
            )}
            {formOfPayment === "ted" && <h1>conteudo TED</h1>}
          </div>
        </Content>
      </div>
    </>
  );
};
