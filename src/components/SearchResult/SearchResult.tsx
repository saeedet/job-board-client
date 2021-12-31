import React from "react";
import "./SearchResult.scss";

interface Props {
  jobs: any;
}

const SearchResult: React.FC<Props> = ({ jobs }) => {
  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="searchResult">
      {jobs.map((job: any, index: number) => (
        <div key={`index-${index}`}>{job.title}</div>
      ))}
    </div>
  );
};

export default SearchResult;
