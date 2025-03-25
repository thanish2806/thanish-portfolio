import React, { useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import useTheme from "./theme";
import Mainmenu from "./mainmenu"; // Import Mainmenu

function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev); // Toggle menu visibility
  };

  return (

        <div className="header">
          <div className="content" id="head">
            {/* Logo */}
            <a href="/">
              <img className="logo" src="/images/my-logo-icon.png" alt="Logo" />
            </a>
            {/* Mobile Menu */}
            <nav className="menu">
              <li>
                <a href="#">
                  <img src="/images/menu-24.png" alt="Menu Icon" />
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleTheme}>
                  <img
                    id="theme-mobile"
                    src={isDarkTheme ? "/images/night-mode.png" : "/images/light-mode.png"}
                    alt="Toggle Theme"
                  />
                </a>
              </li>
            </nav>
            {/* Desktop Navigation */}
            <nav className="navigation">
              <ul>
                <li className="navigationpc">
                  <a href="#" onClick={toggleTheme}>
                    <img
                      id="theme-pc"
                      src={isDarkTheme ? "/images/night-mode.png" : "/images/light-mode.png"}
                      alt="Toggle Theme"
                    />
                  </a>
                </li>
                <li className="navigationpc" id="contactpc">
                  <a onClick={toggleMenu} href="#">Contact</a>
                </li>
                <li className="navigationpc">
                  <a href="#">Experiments</a>
                </li>
                <li className="navigationpc">
                  <a href="#projects">Case Studies</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Social Icons */}
          <div className="icon">
            <a href="https://www.linkedin.com/in/thanish-p-421204200" target="_blank" rel="noopener noreferrer">
              <img
                className="linkedin"
                src={isDarkTheme ? "/images/linkedin-dark.png" : "/images/linkedin-light.png"}
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/thanish2806" target="_blank" rel="noopener noreferrer">
              <img
                className="github"
                src={isDarkTheme ? "/images/github-dark.png" : "/images/github-light.png"}
                alt="GitHub"
              />
            </a>
          </div>
          <div id="info">
            <p className="myname">THANISH</p>
            <p className="myrole">Interactive Front-end Developer</p>
            <div  className="aboutme-btn">
              <button onClick={toggleMenu} className="aboutme" type="button">
                About Me!
              </button>
              <img className="aboutme-forward-icon" src="forward icon.png" alt="" />
            </div>
            <div className="works">
              <a href="#projects">works</a>
              <a href="#projects">
                <img
                  className="arrow"
                  src={isDarkTheme ? "/images/down-arrow-dark.png" : "/images/down-arrow-light.png"}
                  alt="Arrow"
                />
              </a>
            </div>
          </div>
          {isMenuVisible && <Mainmenu isVisible={isMenuVisible} onClose={toggleMenu} />}
        </div>

      
  );
}

export default Header;
