import { MdClear } from "react-icons/md";

import { Cards } from "../../../types/global";
import { CardsContainer } from "../styles";
import { MenssageCardBody, MenssageCardHeader } from "./styles";
interface Props extends Cards {
  title: string;
  content: any;
  className?: string;
}

export const MenssageCard = ({
  background,
  color,
  title,
  content,
  className,
}: Props) => {
  return (
    <CardsContainer
      hoverable
      background={background}
      color={color}
      className={className}
    >
      <MenssageCardHeader>
        <span>{title}</span>
        <MdClear className="hoverable-icon ms-auto p-1" size={28} />
      </MenssageCardHeader>
      <MenssageCardBody>{content}</MenssageCardBody>
    </CardsContainer>
  );
};
