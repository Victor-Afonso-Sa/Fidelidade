import { ExtractItem } from "../ExtractItem";

import { ExtractCard } from "./styles";

export const Extract = () => {
  return (
    <ExtractCard>
      <div className="header">
        <h6 className="text-center">Histórico de Transações</h6>
      </div>
      <div className="extrato-transactions">
        <ExtractItem amount={"5,00"} date="01/12/2021" />
        <ExtractItem amount={"5,00"} date="01/12/2021" />
        <ExtractItem amount={"5,00"} date="01/12/2021" />
      </div>
    </ExtractCard>
  );
};
