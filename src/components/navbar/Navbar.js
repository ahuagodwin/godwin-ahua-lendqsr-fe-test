import React from 'react';
import { Style } from "../../common/styled/Styled";
import { Icons } from '../../constant/Icons';
import { Images } from "../../assets/import";

const Navbar = () => {
  return (
    <>
      <Style.Wrapper sx="navbar__wrapper">
        <Style.Wrapper sx="navbar__left__wrapper">
          <Icons.LendqsrDashboardLogo />
          <Style.Wrapper sx="navbar__search__input">
            <Style.Input type="search" name="search" />
           <Style.Span> <Icons.LendqsrSearch /></Style.Span>
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
    </>
  )
}

export default Navbar