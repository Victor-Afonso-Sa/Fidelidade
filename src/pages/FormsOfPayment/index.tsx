import { Content, PaymentWrapper, Payment, Title } from "./styles";
import { theme } from "../../styles/theme";
import { BsBank2 } from "react-icons/bs";
import Pix from "../../assets/pix.png";

import { useState } from "react";
import { PixKey } from "./components/PixKey";
import { BankTransfer } from "./components/ BankTransfer";

export const FormsOfPayment = () => {
  const [formOfPayment, setFormOfPayment] = useState<string>("pix");
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <Content>
          <div className="d-flex justify-content-center align-items-center gap-3">
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
            {formOfPayment === "pix" && <PixKey />}
            {formOfPayment === "ted" && <BankTransfer />}
          </div>
        </Content>
      </div>
    </>
  );
};
