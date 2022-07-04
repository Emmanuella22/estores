import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages";
import { carts } from "../pages";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<carts />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
