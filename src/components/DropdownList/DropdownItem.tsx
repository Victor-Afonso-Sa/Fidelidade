// @flow
import { Badge } from "antd";
import * as React from "react";
import { IconType } from "react-icons";
import * as MdIcons from "react-icons/md";
import { DropdownItemContainer, ItemIcon, ItemTitle } from "./styles";

type Props = {
  label: string;
  icon: string;
  className?: string;
  badgeCount?: number;
  onClick?: any;
};
export const DropdownItem = ({
  label,
  onClick,
  icon,
  badgeCount,
  className = "",
}: Props) => {
  let Icon = React.createElement(MdIcons[icon! as keyof IconType]);

  return (
    <DropdownItemContainer
      className={className}
      onClick={onClick}
      data-tooltip={label}
    >
      <ItemTitle className="d-none d-lg-block">{label}</ItemTitle>
      <span>
        {badgeCount ? (
          <Badge count={badgeCount} overflowCount={9}>
            <ItemIcon>{Icon}</ItemIcon>
          </Badge>
        ) : (
          <ItemIcon>{Icon}</ItemIcon>
        )}
      </span>
    </DropdownItemContainer>
  );
};
