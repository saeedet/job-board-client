import React, { FormEvent, useState } from "react";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import "./Searchbar.scss";

const Searchbar: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <form onSubmit={searchHandler} className="searchbar">
      <SearchInput
        label="What"
        type="text"
        placeholder="Enter Keywords"
        value={keyword}
        onChange={setKeyword}
        classes="searchbar__align"
      />
      <SearchInput
        label="Where"
        type="text"
        placeholder="Enter city"
        value={location}
        onChange={setLocation}
        classes="searchbar__align"
      />
      <Button
        text="SEARCH"
        size="md"
        classes="searchbar__align"
        type="submit"
      />
    </form>
  );
};

export default Searchbar;
