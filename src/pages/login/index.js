import React from "react";
import { FacebookIcon, GoogleIcon, LockIcon } from "../../assets";
import { AppLayout } from "../../layout";
import styles from "./styles.module.css";


const Login = () => {
  return (
    <AppLayout>
      <main className={`${styles.login_wrapper}`}>
        <div className={`${styles.lock_icon}`}>
          <LockIcon />
        </div>
        <h5>Login or Create an account</h5>
        <p>Login or create an account to place an order</p>
        <div className={`${styles.socials}`}>
          <div className={`${styles.btn_google}`}>
             <GoogleIcon/> Google
          </div>
          <div className={`${styles.btn_facebook}`}>
            <FacebookIcon /> Facebook
          </div>
        </div>
        <button className={`${styles.btn_login}`}>Login with email</button>  
        <button className={`${styles.btn_continue}`}>
          <div className={`${styles.btn_continue_main}`}> Continue as guest</div>
          <div className={`${styles.btn_continue_sub}`}>Buy without creating an account</div>
        </button>
      </main>
     </AppLayout>
  );
};



// const Login = () => {
//   return (
//     <AppLayout>
//       <main className={`${styles.login_wrapper}`}>
//         <div>
//           <LockIcon />
//         </div>
//         <h5>Login or Create an account</h5>
//         <p>Login or create an account to place an order</p>
//         <div>
//           <GoogleIcon className="googleIcon" />
//            Google
//           <FacebookIcon />
//            facebook
//         </div>
//         <div>
//           <button className="btn  btn-grey btn-lg">Login with email</button>
//           <button className="btn btn-primary btn-lg">
//             <h6 className={`${styles.big_btn_text}`}> Continue as guest</h6>
//             <p className={`${styles.small_btn_text}`}>
//               Buy without creating an account
//             </p>
//           </button>
//         </div>
//       </main>
//     </AppLayout>
//   );
// };

export { Login };
