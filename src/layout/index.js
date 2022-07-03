import React from "react";
import { Footer, Header } from "../components";

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
