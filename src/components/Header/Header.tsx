import React from "react";
import "./Header.scss";
import sideKicker from "./../../resource/images/sidekicker-logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        src={sideKicker}
        className="header__logo"
        alt="logo"
        onClick={() => navigate("/")}
      />

      <nav className="header__navbar">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
