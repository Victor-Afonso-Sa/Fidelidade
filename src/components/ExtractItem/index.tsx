import { MdChevronRight } from "react-icons/md/";

import { SubTitle } from "../../styles/global";
import { Item } from "./styles";

type Props = {
  date: string;
  amount: string;
};

export const ExtractItem = ({ date, amount }: Props) => {
  return (
    <Item>
      <div className="items-content">
        <SubTitle>{date}</SubTitle>
        <span>Resgate de: R$ {amount}</span>
      </div>
      <div className="see_more">
        <MdChevronRight className="hoverable-icon" size="24" />
      </div>
    </Item>
  );
};
