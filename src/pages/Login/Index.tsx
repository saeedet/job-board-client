import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../context/Context";
import { useLoginMutation } from "../../generated/graphql";
import "./Login.scss";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const [{}, dispatch] = useContextProvider();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Login handler function
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!usernameRef.current || !passwordRef.current) return;

    const loginResponse = await login({
      variables: {
        email: usernameRef.current.value,
        password: passwordRef.current.value,
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
    }
    navigate("/");
  };
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="username" ref={usernameRef} />
        </div>
        <div>
          <input type="password" placeholder="password" ref={passwordRef} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
