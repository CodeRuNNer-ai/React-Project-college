import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Section2 from "./body/Section2";
import Price from "./Pages/Pricing/Price";
import Loging from "./Pages/Login/Loging";

const Home = () => <Section2 />;

const GetStarted = () => (
  <h1 className="text-white text-center mt-20">Get Started Page</h1>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/loging" element={<Loging />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
};

export default App;