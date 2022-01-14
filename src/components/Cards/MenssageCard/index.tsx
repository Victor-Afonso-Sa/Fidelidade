import { Cards } from "../../../types/global";
import {
  CardsContainer,
  MenssageCardBody,
  MenssageCardHeader,
} from "../styles";
import { MdClear } from "react-icons/md";
interface Props extends Cards {
  title: string;
  content: any;
  className?: string;
  onClose: any;
}

export const MenssageCard = ({
  background,
  color,
  title,
  content,
  className,
  onClose,
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
        <MdClear
          className="hoverable-icon ms-auto p-1"
          size={28}
          onClick={onClose}
        />
      </MenssageCardHeader>
      <MenssageCardBody>{content}</MenssageCardBody>
    </CardsContainer>
  );
};
