import React from "react";
import logo from "./resource/images/logo.svg";
import "./styles/App.css";
import { useGetJobsQuery } from "./generated/graphql";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Index";
import Home from "./pages/Home/Index";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  const { data, loading } = useGetJobsQuery();

  // if (loading) return <div>Loading</div>;
  // if (data) return <div>{data.getJobs[0].title}</div>;
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
