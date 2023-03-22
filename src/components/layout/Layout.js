import React from "react";
import { Outlet } from "react-router-dom";
import { Style } from "../../common/styled/Styled";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Style.Wrapper>
        <Style.Section>
          <Navbar />
        </Style.Section>
        <Style.Wrapper sx="layout__wrapper">
            <Style.Wrapper sx="layout__wrapper__sidebar"> <Sidebar /></Style.Wrapper>
          <Style.Section sx="layout__main">
             <Style.Span> {window.location.pathname === "/dashboard" ? "Overview" : window.location.pathname.split("/")[2]}</Style.Span>
            <Style.Wrapper>
                <Outlet />
            </Style.Wrapper>
          </Style.Section>
        </Style.Wrapper>
      </Style.Wrapper>
    </>
  );
};

export default DashboardLayout;
