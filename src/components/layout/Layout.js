import React from "react";
import { Link } from "react-router-dom";
import { Style } from "../../common/styled/Styled";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = (props) => {
  return (
    <>
      <Style.Wrapper>
        <Style.Section sx="fixed bg-white w-full">
          <Navbar />
        </Style.Section>
        <Style.Wrapper sx="layout__wrapper">
            <Style.Wrapper sx="layout__wrapper__sidebar mt-[5rem]"> <Sidebar /></Style.Wrapper>
          <Style.Section sx="layout__main">
             <Style.Span> <Link to={props.path} className="flex items-center gap-2 w-36"> {props.icon} {window.location.pathname === "/dashboard" ? "Overview" : window.location.pathname.split("/")[2]}</Link></Style.Span>
            <Style.Wrapper>
                {props.children}
            </Style.Wrapper>
          </Style.Section>
        </Style.Wrapper>
      </Style.Wrapper>
    </>
  );
};

export default DashboardLayout;
