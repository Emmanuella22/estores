import React from "react";
import { Footer, Header } from "../components";
import { Login } from "../pages";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    
    </>
  );
};

export { AppLayout };
