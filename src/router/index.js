import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages";
import { ProductLists } from "../pages";
import { ProductDetails } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductLists />} />
        <Route path="/productsdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
