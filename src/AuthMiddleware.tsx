import axios from "axios";
import React, { useEffect, useState } from "react";
import { setAccessToken } from "./utils/accessToken";
import App from "./App";

const AuthMiddleware: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("http://localhost:4000/refresh_token", {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
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
