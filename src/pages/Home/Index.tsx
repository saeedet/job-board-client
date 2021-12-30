import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Home page</h1>
      <Button text="JOBS" size="lg" onClick={() => navigate("/jobs")} />
    </div>
  );
};

export default Home;
