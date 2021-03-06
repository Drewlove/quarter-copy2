import React, { useState, useEffect, useRef } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

function MenuSignedInMain() {
  const [menu, setMenuDisplay] = useState({
    display: false,
  });

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuDisplay({ display: false });
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleMenuDisplay = () => {
    const menuDisplayStatus = menu.display;
    setMenuDisplay({ display: !menuDisplayStatus });
  };

  const renderMenu = () => {
    return (
      <div className="header__menu_drop-down">
        <HeaderLink
          url="/p&l"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Home"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/departments"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Departments"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/roles"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Roles"
          className="header__link_dropdown"
        />
        <HeaderLink
          url="/schedule"
          toggleMenuDisplay={() => toggleMenuDisplay()}
          text="Schedule"
          className="header__link_dropdown"
        />
      </div>
    );
  };

  return (
    <div
      className="header__button-container header__button-container_hamburger"
      ref={wrapperRef}
    >
      <button
        className={`header__menu-button header__menu-button_hamburger ${
          menu.display === true ? "open" : ""
        }`}
        onClick={() => toggleMenuDisplay()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menu.display ? renderMenu() : null}
    </div>
  );
}

export default MenuSignedInMain;
