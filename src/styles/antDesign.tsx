import styled from "styled-components";
import { Modal, Button } from "antd";

export const AntModal = styled(Modal)`
  &.ant-modal {
    width: auto !important;
  }

  .ant-modal-content {
    border-radius: 8px !important;
  }

  .ant-modal-header {
    border-radius: 8px;
    padding: 10px;
    border-bottom: 0px !important;
    div {
      background-color: ${({ theme }) => theme.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 56px;
      display: flex;
      align-items: center;
      text-align: justify;
      text-transform: capitalize;
      font-feature-settings: "cpsp" on;
      color: #ffffff;
      padding: 12px;
    }
  }

  .ant-modal-content .ant-modal-close {
    top: 24px !important;
    right: 22px !important;
    width: 48px !important;
    height: 48px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .ant-modal-content .ant-modal-close .ant-modal-close-x svg {
    /* display: flex; */
    width: 48px;
    height: 48px;
    color: white;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: white; */
    /* border-radius: 50%; */
  }

  /* .ant-modal-content
    .ant-modal-close
    .ant-modal-close-x
    .anticon.anticon-close.ant-modal-close-icon
    svg {
    width: 28px !important;
    height: 28px !important;
  } */

  .ant-modal-body {
    padding: 10px !important;
  }

  .ant-modal-footer {
    border-top: 0px !important;
  }
`;

interface ButtonModel {
  styled?: string;
}

export const AntButton = styled(Button)<ButtonModel>`
  letter-spacing: 0.1em;
  &.ant-btn[disabled] {
    color: ${({ theme }) => theme.gray} !important;
    border-color: ${({ theme }) => theme.disabled}!important;
    background: ${({ theme }) => theme.disabled} !important;
  }

  &.ant-btn {
    color: ${({ styled, theme }) => (styled ? theme[styled] : "")} !important;
    border-color: ${({ styled, theme }) =>
      styled ? theme[styled] : ""}!important;
    background: ${({ styled, theme }) => "white"} !important;
  }

  &.ant-btn-primary {
    color: ${({ styled, theme }) => "white"} !important;
    border-color: ${({ styled, theme }) =>
      styled ? theme[styled] : ""}!important;
    background: ${({ styled, theme }) =>
      styled ? theme[styled] : ""} !important;
  }

  &.ant-btn-dashed {
    color: ${({ styled, theme }) => (styled ? theme[styled] : "")} !important;
    border-color: ${({ styled, theme }) =>
      styled ? theme[styled] : ""}!important;
    background: ${({ styled, theme }) => "white"} !important;
  }
`;
