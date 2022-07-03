import React from "react";
import {
  CartIcon,
  HamburgerIcon,
  LoginIcon,
  logo,
  SearchIcon,
} from "../../assets";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      {/* big header */}
      <header className={`${styles.container} d-none d-xl-block`}>
        <div className="d-flex justify-content-between app-container">
          <div>
            <img src={logo} alt="logo" />
            <span className="fw-bold ms-2">Emmy_shoes</span>
          </div>
          <div>
            <div className={`${styles.search}`}>
              <SearchIcon />
              <input placeholder="search for items" />
            </div>
          </div>
          <div className="">
            <CartIcon className="me-4 align-middle" />
            <div className="d-inline-block">
              <span className={`${styles.loginText} me-2`}>
                Login/create account
              </span>
              <LoginIcon className="align-middle" />
            </div>
          </div>
        </div>
      </header>
      {/* small header */}
      <header className={`${styles.smallContainer} d-xl-none`}>
        <div className="d-flex align-items-center justify-content-between app-container">
          <div>
            <img src={logo} alt="logo" />
            <span className={`fw-bold ms-2 ${styles.logoText}`}>
              Emmy_shoes
            </span>
          </div>
          <div>
            <CartIcon className="me-4 align-middle" />
            <HamburgerIcon className="align-middle" />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
