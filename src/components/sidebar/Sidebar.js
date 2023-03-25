import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { dahsboard } from "../../common/data/data";
import { Style } from "../../common/styled/Styled";
import { Icons } from "../../constant/Icons";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect the user to the home page on logout
    navigate("/");
  };

  return (
    <>
      <Style.Wrapper sx="sidebar overflow-y-auto">
        <>
          {dahsboard.map((item, i) => (
            <Style.Section key={i} sx="sidebar__path__item">
              <Style.Text>{item.label}</Style.Text>
              {item.dahsboard.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? "sidebar__active text-red-500"
                      : "text-gray-500"
                  }
                >
                  {item.icons}
                  <Style.Text>{item.name}</Style.Text>
                  {item.arrow}
                </NavLink>
              ))}
            </Style.Section>
          ))}

          <Style.Wrapper sx="logout__wrapper">
                <Style.Text onClick={handleLogout}> <Icons.LendqsrLogout /> Logout</Style.Text>
                <Style.Span>V1.2.0</Style.Span>
          </Style.Wrapper>

        </>
      </Style.Wrapper>
    </>
  );
};

export default Sidebar;
