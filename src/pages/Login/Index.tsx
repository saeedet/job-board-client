import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useContextProvider } from "../../context/Context";
import { useLoginMutation } from "../../generated/graphql";
import "./Login.scss";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const [{ error }, dispatch] = useContextProvider();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Login handler function
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) return;

    const loginResponse = await login({
      variables: {
        email,
        password,
      },
    });

    if (loginResponse && loginResponse.data) {
      dispatch({
        type: "SET_USER",
        payload: {
          firstName: loginResponse.data.login.user.firstName,
          lastName: loginResponse.data.login.user.lastName,
          accessToken: loginResponse.data.login.accessToken,
        },
      });
      dispatch({
        type: "SET_ERROR",
        payload: null,
      });
      navigate("/");
    }
  };
  return (
    <div className="login">
      <LoginForm
        onSubmit={submitHandler}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error && error.path === "login"}
      />
    </div>
  );
};

export default Login;
