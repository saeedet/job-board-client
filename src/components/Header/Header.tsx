import React, { useEffect } from "react";
import "./Header.scss";
import sideKicker from "./../../resource/images/sidekicker-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import { useLogoutMutation, useWhoAmIQuery } from "../../generated/graphql";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [{ accessToken }, dispatch] = useContextProvider();
  const [logout, { client }] = useLogoutMutation();
  const { data } = useWhoAmIQuery();

  const logoutHanlder = async () => {
    await logout();
    dispatch({
      type: "SET_USER",
      payload: {
        firstName: null,
        lastName: null,
        accessToken: "",
      },
    });
    await client.resetStore();
  };

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
          {accessToken ? (
            <>
              <li style={{ textTransform: "capitalize" }}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  {data?.whoAmI?.firstName} {data?.whoAmI?.lastName}
                </a>
              </li>

              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={logoutHanlder}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
