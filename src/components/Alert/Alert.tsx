import React from "react";
import "./Alert.scss";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface Props {
  message: string;
}

const Alert: React.FC<Props> = () => {
  return (
    <div className="alert">
      <ErrorOutlineIcon className="alert__icon" />
      <span>Wrong username or password</span>
    </div>
  );
};

export default Alert;
