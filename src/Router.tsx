import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Subscription from "./views/Subscription";
import Login from "./views/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
