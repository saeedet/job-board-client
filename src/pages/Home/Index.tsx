import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Reinventing casual and temporary staffing</h1>
      <p>
        We’re using technology to dramatically improve the way labour hire works
        for businesses and workers.
      </p>
      <Button text="JOB SEARCH" size="lg" onClick={() => navigate("/jobs")} />
    </div>
  );
};

export default Home;
