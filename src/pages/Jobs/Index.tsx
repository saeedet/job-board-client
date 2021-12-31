import React, { useState } from "react";
import "./Jobs.scss";
import { useGetJobsQuery } from "../../generated/graphql";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResult from "../../components/SearchResult/SearchResult";
import SearchAll from "../../components/SearchAll/SearchAll";

const Jobs: React.FC = () => {
  const { data } = useGetJobsQuery();
  const [searchAll, setSearchAll] = useState<boolean>(true);

  return (
    <div className="jobs">
      <Searchbar />
      {searchAll ? (
        <SearchAll onClick={setSearchAll} />
      ) : (
        <SearchResult jobs={data?.getJobs} />
      )}
    </div>
  );
};

export default Jobs;
