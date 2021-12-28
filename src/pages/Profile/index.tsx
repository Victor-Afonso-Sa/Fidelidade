// @flow
import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ProfileContentContainer, ProfileSidebar } from "./styles";
import { DropdownList } from "./../../components/DropdownList/index";
import { MdArrowBack } from "react-icons/md";
import { Row } from "../../styles/global";
import { theme } from "../../styles/theme";
type Props = {};

export const Profile = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <ProfileSidebar className="col-2">
        <Row className="mt-2 justify-content-center justify-content-md-start">
          <MdArrowBack
            className="icon"
            size={24}
            color={theme.primary}
            onClick={() => navigate("/")}
          />
        </Row>
        <DropdownList />
      </ProfileSidebar>
      <ProfileContentContainer className="col-10">
        <Outlet />
      </ProfileContentContainer>
    </div>
  );
};
