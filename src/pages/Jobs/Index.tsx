import React from "react";
import { useGetJobsQuery } from "../../generated/graphql";

const Jobs = () => {
  const { data, loading, error } = useGetJobsQuery();
  return <div>This is jobs page</div>;
};

export default Jobs;
