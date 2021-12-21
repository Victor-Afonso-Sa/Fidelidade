// @flow
import { Badge } from "antd";
import * as React from "react";

import { DropdownItemContainer, ItemIcon, ItemTitle } from "./styles";

type Props = {
  label: string;
  icon: React.ReactElement;
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
            <ItemIcon>{icon}</ItemIcon>
          </Badge>
        ) : (
          <ItemIcon>{icon}</ItemIcon>
        )}
      </span>
    </DropdownItemContainer>
  );
};
