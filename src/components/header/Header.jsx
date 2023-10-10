
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import ContentWrapper from "../contentWrapper/ContetntWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

  
  
    return (
      <header>
        <ContentWrapper>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="movix" />
            </a>
          </div>
          <ul className="menuItems">
            <li className="menuItem">Movies</li>
            <li className="menuItem">TV Shows</li>
            <li className="menuItem">{HiOutlineSearch}</li>
          </ul>
        </ContentWrapper>
      </header>
    );
};

export default Header;