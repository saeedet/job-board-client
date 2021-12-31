import React from "react";
import "./Jobs.scss";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../generated/graphql";
import Searchbar from "../../components/Searchbar/Searchbar";

const Jobs: React.FC = () => {
  const { data, loading } = useGetJobsQuery();

  if (loading) {
    return (
      <div className="jobs__loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="jobs">
      <Searchbar />
      {data?.getJobs.map((job, index) => (
        <div key={`index-${index}`}>{job.title}</div>
      ))}
    </div>
  );
};

export default Jobs;
