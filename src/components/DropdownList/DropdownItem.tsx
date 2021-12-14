// @flow
import * as React from "react";
import { Badge, DropdownItemContainer, ItemIcon, ItemTitle } from "./styles";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons";
import { formatBigNumbers } from "../../utils/functions";
type Props = {
  label: string;
  icon: string;
  className?: string;
  badgeCount?: number;
  onClick?: any
};
export const DropdownItem = ({ label, onClick, icon, badgeCount, className='',}: Props) => {
  let Icon = React.createElement(MdIcons[icon! as keyof IconType]);

  return (
    <DropdownItemContainer className={className} onClick={onClick}>
      <ItemTitle>{label}</ItemTitle>
      {badgeCount ? <Badge>{formatBigNumbers(badgeCount)}</Badge> : ('')}
      <ItemIcon>{Icon}</ItemIcon>
    </DropdownItemContainer>
  );
};
