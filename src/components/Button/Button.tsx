import React from "react";
import "./Button.scss";

interface Props {
  size: "sm" | "md" | "lg";
  text: string;
}

const Button: React.FC<Props> = ({ size, text, ...props }) => {
  const classes = `btn  btn__${size}`;

  return (
    <button className={classes} {...props}>
      {text}
    </button>
  );
};

export default Button;
