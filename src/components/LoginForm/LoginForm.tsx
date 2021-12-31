import React, { FormEvent } from "react";
import "./LoginForm.scss";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Alert from "../Alert/Alert";

interface Props {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error: boolean;
}

const LoginForm: React.FC<Props> = ({
  email,
  password,
  setEmail,
  setPassword,
  error,
  ...props
}) => {
  return (
    <form {...props} className="loginForm">
      <h1>Login</h1>
      {error && <Alert message="Wrong username or password" />}
      <FormInput
        type="email"
        label="Email"
        placeholder=""
        value={email}
        onChange={setEmail}
      />
      <FormInput
        type="password"
        label="Password"
        placeholder=""
        value={password}
        onChange={setPassword}
      />

      <Button type="submit" text="Login" size="form" classes="loginForm__btn" />
    </form>
  );
};

export default LoginForm;
