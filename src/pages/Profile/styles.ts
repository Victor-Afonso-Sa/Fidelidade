import styled from "styled-components";

export const ProfileSidebar = styled.div`
  border-right: 2px solid ${({ theme }) => theme.primary};
  height: 100vh;
  margin: 10px 0;
  padding-right: 5px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  & .icon {
    margin-left: 21px;
    cursor: pointer;
    @media screen and (max-width: 576px) {
      margin-left: 0;
    }
  }
`;
export const ProfileContentContainer = styled.div`
  height: 100%;
`;
