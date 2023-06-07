import { AiFillApple } from "react-icons/ai";
import { LoginStyles } from "@/Styles/Login.styles";
import Link from "next/link";
import LoginModule from "./LoginModule";
import GoogleLogin from "./GoogleLogin";
import CheckSignedIn from "./CheckSignedIn";

// import { Lato } from "next/font/google";
// import { Montserrat } from "next/font/google";

const Login = () => {
  return (
    <main className={LoginStyles.main}>
      <CheckSignedIn />
      <aside className={LoginStyles.aside}>
        <p className={LoginStyles.asideText}>Board.</p>
      </aside>
      <section className={LoginStyles.signInMain}>
        <section className={LoginStyles.signInBox}>
          <p className={LoginStyles.signInHeading}>Sign In</p>
          <p className={LoginStyles.signInSubHeading}>Sign in to your account</p>
          <div className={LoginStyles.extLoginMain}>
            <GoogleLogin />
            <button className={LoginStyles.extBtns}>
              <AiFillApple style={{ color: "#999999" }} /> <p className={LoginStyles.extBtnText}> Sign in with Apple</p>
            </button>
          </div>
          <LoginModule />
          <p className={LoginStyles.register}>
            Don&apos;t have an account?
            <Link className={LoginStyles.regLink} href={"#"}>
              Register Here
            </Link>
          </p>
        </section>
      </section>
    </main>
  );
};

export default Login;
