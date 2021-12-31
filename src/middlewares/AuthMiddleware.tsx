import axios from "axios";
import React, { useEffect, useState } from "react";
import App from "../App";
import { useContextProvider } from "../context/Context";
import logo from "../resource/images/logo.svg";
import "./../styles/App.scss";

const AuthMiddleware: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [{}, dispatch] = useContextProvider();

  useEffect(() => {
    axios
      .get("http://localhost:4000/refresh_token", {
        withCredentials: true,
      })
      .then((data) => {
        if (data.data.error) {
          console.error(data.data.message);
        } else {
          dispatch({
            type: "SET_ACCESSTOKEN",
            payload: data.data.accessToken,
          });
        }

        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading...</p>
      </header>
    );
  }

  return <App />;
};

export default AuthMiddleware;
