import axios from "axios";
import React, { useEffect, useState } from "react";
import { setAccessToken } from "./utils/accessToken";
import App from "./App";

const AuthMiddleware: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/refresh_token", {
        withCredentials: true,
      })
      .then((data) => {
        setAccessToken(data.data.accessToken);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <App />;
};

export default AuthMiddleware;
