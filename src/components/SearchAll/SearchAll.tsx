import React from "react";
import "./SearchAll.scss";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchAll: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="searchAll" onClick={() => onClick(false)}>
      <div>
        <SearchIcon className="search__icon" />{" "}
        <span>All Jobs in Australia</span>
      </div>
    </div>
  );
};

export default SearchAll;
