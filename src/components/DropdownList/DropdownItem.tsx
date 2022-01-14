// @flow
import { Badge } from "antd";
import * as React from "react";
import { useLocation } from "react-router-dom";

import { DropdownItemContainer, ItemIcon, ItemTitle } from "./styles";

type Props = {
  label: string;
  icon: React.ReactElement;
  className?: string;
  badgeCount?: number;
  onClick?: any;
  active?: string;
};
export const DropdownItem = ({
  label,
  onClick,
  icon,
  badgeCount,
  active,
  className = "",
}: Props) => {
  const location = useLocation();
  return (
    <DropdownItemContainer
      className={className}
      onClick={onClick}
      data-tooltip={label}
      active={Object.values(location)[0] === active}
      data-testid={label}
    >
      <ItemTitle className="d-none d-lg-block">{label}</ItemTitle>
      <span>
        {badgeCount ? (
          <Badge count={badgeCount} overflowCount={9}>
            <ItemIcon active={Object.values(location)[0] === active}>
              {icon}
            </ItemIcon>
          </Badge>
        ) : (
          <ItemIcon active={Object.values(location)[0] === active}>
            {icon}
          </ItemIcon>
        )}
      </span>
    </DropdownItemContainer>
  );
};
