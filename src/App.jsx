import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Section2 from "./body/Section2";
import Pricing from "./Header/Pricing";

const Home = () => <Section2 />;

const Login = () => (
  <h1 className="text-white text-center mt-20">Login Page</h1>
);

const GetStarted = () => (
  <h1 className="text-white text-center mt-20">Get Started Page</h1>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
};

export default App;