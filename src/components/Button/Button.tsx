import React from "react";
import "./Button.scss";

interface Props {
  size: "sm" | "md" | "lg";
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ size, text, onClick, ...props }) => {
  const classes = `btn  btn__${size}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
