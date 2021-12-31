import React from "react";
import "./Button.scss";

interface Props {
  size: "sm" | "md" | "lg" | "form";
  text: string;
  onClick?: () => void;
  classes?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ size, text, classes, ...props }) => {
  const btnClasses = `btn  btn-${size} ${classes}`;

  return (
    <button className={btnClasses} {...props}>
      <div>{text}</div>
    </button>
  );
};

export default Button;
