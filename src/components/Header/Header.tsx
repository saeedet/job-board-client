import React from "react";
import "./Header.scss";
import sideKicker from "./../../resource/images/sidekicker-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import { useWhoamiQuery } from "../../generated/graphql";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [{ id }, dispatch] = useContextProvider();
  const { data, loading } = useWhoamiQuery({ variables: id });
  console.log(data);
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
