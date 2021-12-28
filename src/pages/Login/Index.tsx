import React, { FormEvent, useRef } from "react";
import { useLoginMutation } from "../../generated/graphql";
import "./Login.scss";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
    console.log(loginResponse);
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
