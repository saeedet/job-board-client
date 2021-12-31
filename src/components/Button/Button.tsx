import React from "react";
import "./Button.scss";

interface Props {
  size: "sm" | "md" | "lg";
  text: string;
  onClick: () => void;
  classes?: string;
}

const Button: React.FC<Props> = ({
  size,
  text,
  onClick,
  classes,
  ...props
}) => {
  const btnClasses = `btn  btn-${size} ${classes}`;

  return (
    <button className={btnClasses} onClick={onClick} {...props}>
      <div>{text}</div>
    </button>
  );
};

export default Button;
