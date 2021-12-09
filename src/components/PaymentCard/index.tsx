// @flow
import * as React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { IconType } from "react-icons";

type Props = {
  icon: string;
  label: string;
  className?: string;
  onClick?: any;
  active?: boolean | undefined;
};
export const PaymentCardWrapper = styled.div`
  min-width: 155px;
  padding: 20px;
  margin: 20px;
  color: ${({ theme }) => theme.success};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  & .icon {
    font-size: 32px;
  }
  &.active {
    color: #fff;
    background-color: ${({ theme }) => theme.success};
  }
`;
export const PaymentCard = ({
  icon,
  label,
  className,
  onClick,
  active = false,
}: Props) => {
  let Icon = React.createElement(FaIcons[icon! as keyof IconType]);
  return (
    <PaymentCardWrapper
      className={`${active ? "active" : ""} ${className ?? ""} `}
      onClick={onClick}
    >
      <span className="icon">{Icon}</span>
      <span>{label}</span>
    </PaymentCardWrapper>
  );
};
