import React from "react";
import logo from "./resource/images/logo.svg";
import "./styles/App.css";
import { useQuery, gql } from "@apollo/client";
import { useGetJobsQuery } from "./generated/graphql";

function App() {
  const { data, loading } = useGetJobsQuery();

  console.log(data);
  if (loading) return <div>Loading</div>;
  if (data) return <div>{data.getJobs[0].title}</div>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
