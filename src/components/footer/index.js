import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.container}`}>
      Click here to get a site like this for your business from{" "}
      <span className="fw-bold">XYZ</span>
    </footer>
  );
};

export { Footer };
