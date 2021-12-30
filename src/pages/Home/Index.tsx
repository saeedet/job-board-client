import React from "react";
import Button from "../../components/Button/Button";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <Button text="JOBS" size="lg" />
    </div>
  );
};

export default Home;
