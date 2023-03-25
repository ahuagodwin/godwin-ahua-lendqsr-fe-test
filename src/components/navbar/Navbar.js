import React, { useState } from "react";
import { Style } from "../../common/styled/Styled";
import { Icons } from "../../constant/Icons";
import { Images } from "../../assets/import";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Style.Wrapper sx="navbar__wrapper bg-white">
        <Style.Wrapper sx="navbar__left__wrapper">
          {isOpen ? <Icons.LendqsrMenuClose onClick={handleOpenMenu} className="menuClose" title="close menu" /> :
          <Icons.LendqsrMenuIcon onClick={handleOpenMenu} className="menuOpen" title="open menu" />}

          <Icons.LendqsrDashboardLogo
            width="145"
            height="30"
            sx="hidden sm:hidden md:block lg:block"
          />
          <Icons.LendqsrDashboardLogo
            width="100"
            height="30"
            sx="block sm:block md:hidden lg:hidden"
          />
          <Style.Wrapper sx="navbar__search__input">
            <Style.Input type="search" name="search" />
            <Style.Span>
              {" "}
              <Icons.LendqsrSearch />
            </Style.Span>
          </Style.Wrapper>
        </Style.Wrapper>

        <Style.Wrapper sx="navbar__right__wrapper">
          <Style.Text>Doc</Style.Text>
          <Icons.LendqsrBell />
          <Style.Section sx="navbar__right__wrapper__user">
            <Style.Img img={Images.UserAvatar} alt="" />
            <Style.Text>Godwin</Style.Text>
            <Icons.LendqsrArrowDown />
          </Style.Section>
        </Style.Wrapper>
      </Style.Wrapper>

      {isOpen && (
          <Style.Wrapper sx="block sm:block md:block lg:hidden">
              <Sidebar />
          </Style.Wrapper>
        )}
    </>
  );
};

export default Navbar;
