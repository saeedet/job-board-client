import React from "react";
import "./SearchResult.scss";
import { Job } from "./../../types/Job";
import JobCard from "../JobCard/JobCard";

interface Props {
  jobs: Job[] | undefined;
}

const SearchResult: React.FC<Props> = ({ jobs }) => {
  if (!jobs) {
    return <div>Loading...</div>;
  }
  console.log(jobs);
  return (
    <div className="searchResult">
      <div>
        {jobs.map(
          ({ id, title, description, location, date }: Job, index: number) => (
            <JobCard
              id={id}
              title={title}
              description={description}
              location={location}
              date={date}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchResult;
