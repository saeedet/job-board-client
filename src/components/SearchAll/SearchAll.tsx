import React from "react";
import "./SearchAll.scss";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onClick: () => void;
}

const SearchAll: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="searchAll" {...props}>
      <div>
        <SearchIcon className="search__icon" />{" "}
        <span>All Jobs in Australia</span>
      </div>
    </div>
  );
};

export default SearchAll;
