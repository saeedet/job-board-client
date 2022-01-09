import React, { useState } from "react";
import "./Jobs.scss";
import { useGetJobsLazyQuery, useGetJobsQuery } from "../../generated/graphql";
import Searchbar from "../../components/Searchbar/Searchbar";
import SearchResult from "../../components/SearchResult/SearchResult";
import SearchAll from "../../components/SearchAll/SearchAll";

const Jobs: React.FC = () => {
  const [getJobs, { data, loading }] = useGetJobsLazyQuery();
  const [showResult, setShowResult] = useState<boolean>(false);

  // Function to get all jobs and switch the display
  const searchAllHandler = () => {
    getJobs();
    setShowResult(true);
  };
  return (
    <div className="jobs">
      <Searchbar />
      {showResult ? (
        <SearchResult jobs={data?.getJobs} />
      ) : (
        <SearchAll onClick={searchAllHandler} />
      )}
    </div>
  );
};

export default Jobs;
