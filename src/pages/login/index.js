import React from "react";
import { FacebookIcon, GoogleIcon, LockIcon } from "../../assets";
import { AppLayout } from "../../layout";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <AppLayout>
      <main className={`${styles.login_wrapper}`}>
        <div>
          <LockIcon />
        </div>
        <h5>Login or Create an account</h5>
        <p>Login or create an account to place an order</p>
        <div>
          <GoogleIcon />
           Google
          <FacebookIcon />
           facebook
        </div>
        <div>
          <button className="btn  btn-grey btn-lg">Login with email</button>
          <button className="btn btn-primary btn-lg">
            <h6 className={`${styles.big_btn_text}`}> Continue as guest</h6>
            <p className={`${styles.small_btn_text}`}>
              Buy without creating an account
            </p>
          </button>
        </div>
      </main>
    </AppLayout>
  );
};

export { Login };
