import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../images/Sports_Club.png"
function Header() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return (

    <div>
      <Desktop>
        <div className="header">
          <div className="list">
            <ul>
              <li className="headlist">
                <NavLink to="/" className="button">
                  HOME
                </NavLink>
              </li>
              <li className="headlist">
                <NavLink to="/team" className="button">
                  TEAM
                </NavLink>
              </li>
              <li className="headlist">
                <NavLink to="/event" className="button">
                  EVENT
                </NavLink>
              </li>
              <li className="headlist">
                <NavLink to="/gallery " className="button">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo"><img src={logo} alt="logo" /></div>
      </Desktop>

      <Mobile>
        <header className="Header">
          <div className="logo"><a href="#"><img src={logo} alt="logo" style={{ height: "50px", transform: "translateX(30px)", marginTop: "5px", marginBottom: "5px" }} /></a></div>

          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
          >
            <nav className="Nav">

              <NavLink to="/" className="button">
                HOME
              </NavLink>
              <NavLink to="/team" className="button">
                TEAM
              </NavLink>
              <NavLink to="/event" className="button">
                EVENT
              </NavLink>
              <NavLink to="/gallery" className="button">
                Gallery
              </NavLink>
            </nav>
          </CSSTransition>
          <button onClick={toggleNav} className="Burger">
            🤾‍♀️
          </button>
        </header>
      </Mobile>
    </div>

  );

}
export default Header;