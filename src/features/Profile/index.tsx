// @flow
import * as React from "react";
import { Outlet } from "react-router-dom";
import { ProfileContentContainer, ProfileSidebar } from "./styles";
import { DropdownList } from './../../components/DropdownList/index';
type Props = {};

export const Profile = (props: Props) => {
  return (
    <div className="d-flex">
      <ProfileSidebar className="d-flex col-2">
        <DropdownList />
      </ProfileSidebar>
      <ProfileContentContainer className="col-10">
        <Outlet />
      </ProfileContentContainer>
    </div>
  );
};
