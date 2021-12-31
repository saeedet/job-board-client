import React from "react";
import "./FormInput.scss";

interface Props {
  type: string;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  classes?: string;
  label: string;
}

const FormInput: React.FC<Props> = ({
  type,
  placeholder,
  value,
  label,
  classes,
  onChange,
  ...props
}) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default FormInput;
