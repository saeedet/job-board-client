import React from "react";
import "./Jobs.scss";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../generated/graphql";

const Jobs: React.FC = () => {
  const { data, loading, error } = useGetJobsQuery();
  const navigate = useNavigate();
  if (error) {
    navigate("/login");
  }
  return (
    <div className="jobs">
      {data?.getJobs.map((job, index) => (
        <div key={`index-${index}`}>{job.title}</div>
      ))}
    </div>
  );
};

export default Jobs;
