import React from "react";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import NavBar, { NavItem, NavLink, Submenu, Megamenu } from "../../ui/navbar";
import { MainMenuWrap } from "./mainmenu.style";
import Heading from "../../ui/heading";

export const MainMenu = ({ headingStyle, menuData, ...props }) => {
  const menuarr = menuData;
  return (
    <MainMenuWrap {...props}>
      <NavBar>
        {menuarr.map(menu => {
          const hasSubmenu = menu.node.isSubmenu ? true : null;
          const hasMegamenu = menu.node.isMegamenu ? true : null;
          const submenu = menu.node.submenu;
          const megamenu = menu.node.megamenu;

          return (
            <NavItem
              key={`mainmenu-${menu.node.id}`}
              hasSubmenu={hasSubmenu}
              hasMegamenu={hasMegamenu}
            >
              <NavLink
                path={menu.node.link}
                hassubmenu={hasSubmenu || hasMegamenu ? "true" : "false"}
              >
                <span>{menu.node.text}</span>
                {(hasSubmenu || hasMegamenu) && (
                  <MdKeyboardArrowDown className="icon" />
                )}
              </NavLink>
              {submenu && (
                <Submenu>
                  {submenu.map((subitem, i) => {
                    const hasSubmenuLevelTwo = subitem.isSubmenu;
                    const submenuLevelTwo = subitem.submenu;
                    const submenuIndex = i;
                    return (
                      <NavItem key={`submenu-${menu.node.id}-${submenuIndex}`}>
                        <NavLink path={subitem.link}>
                          <span>{subitem.text}</span>
                          {hasSubmenuLevelTwo && (
                            <MdKeyboardArrowRight className="icon" />
                          )}
                        </NavLink>
                        {submenuLevelTwo && (
                          <Submenu>
                            {submenuLevelTwo.map((subitemLevelTwo, j) => {
                              const subsubmenuIndex = j;
                              return (
                                <NavItem
                                  key={`submenu-${menu.node.id}-${submenuIndex}-${subsubmenuIndex}`}
                                >
                                  <NavLink path={subitemLevelTwo.link}>
                                    {subitemLevelTwo.text}
                                  </NavLink>
                                </NavItem>
                              );
                            })}
                          </Submenu>
                        )}
                      </NavItem>
                    );
                  })}
                </Submenu>
              )}
              {megamenu && (
                <Megamenu>
                  {megamenu.map((megaitem, i) => {
                    const megaSubmenu = megaitem.submenu;
                    const megaIndex = i;
                    return (
                      <NavItem key={`megamenu-${menu.node.id}-${megaIndex}`}>
                        <Heading {...headingStyle}>{megaitem.title}</Heading>
                        {megaSubmenu && (
                          <Submenu>
                            {megaSubmenu.map((megaSubitem, i) => {
                              return (
                                <NavItem key={`megasubmenu-${megaIndex}-${i}`}>
                                  <NavLink path={megaSubitem.link}>
                                    {megaSubitem.text}
                                  </NavLink>
                                </NavItem>
                              );
                            })}
                          </Submenu>
                        )}
                      </NavItem>
                    );
                  })}
                </Megamenu>
              )}
            </NavItem>
          );
        })}
      </NavBar>
    </MainMenuWrap>
  );
};

MainMenu.propTypes = {
  alignment: PropTypes.string,
  headingStyle: PropTypes.object
};

MainMenu.defaultProps = {
  alignment: "center",
  headingStyle: {
    fontSize: "14px",
    mb: "20px"
  }
};
