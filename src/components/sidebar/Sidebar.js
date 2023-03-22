import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { dahsboard } from "../../common/data/data";
import { Style } from "../../common/styled/Styled";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <Style.Wrapper sx="sidebar">
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
        </>
      </Style.Wrapper>
    </>
  );
};

export default Sidebar;
