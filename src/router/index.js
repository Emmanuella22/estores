import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages";
import {ProductLists } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductLists />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
