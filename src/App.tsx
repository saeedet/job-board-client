import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Index";
import Home from "./pages/Home/Index";
import Header from "./components/Header/Header";
import Signup from "./pages/Signup/Index";
import Jobs from "./pages/Jobs/Index";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
};

export default App;
