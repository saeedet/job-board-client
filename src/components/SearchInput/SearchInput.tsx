import React from "react";
import "./SearchInput.scss";

interface Props {
  type: string;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  classes?: string;
  label: string;
}

const SearchInput: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  value,
  classes,
  label,
  ...props
}) => {
  return (
    <div className={`searchInput ${classes}`}>
      <div>{label}</div>
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

export default SearchInput;
