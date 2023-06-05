"use client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { LoginStyles } from "@/Styles/Login.styles";
import Link from "next/link";
// import { Lato } from "next/font/google";
// import { Montserrat } from "next/font/google";
const Login = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/dashboard");
  };
  return (
    <main className={LoginStyles.main}>
      <aside className={LoginStyles.aside}>
        <p className={LoginStyles.asideText}>Board.</p>
      </aside>
      <section className={LoginStyles.signInMain}>
        <section className={LoginStyles.signInBox}>
          <p className={LoginStyles.signInHeading}>Sign In</p>
          <p className={LoginStyles.signInSubHeading}>Sign in to your account</p>
          <div className={LoginStyles.extLoginMain}>
            <button className={LoginStyles.extBtns}>
              <FcGoogle /> <p className={LoginStyles.extBtnText}> Sign in with Google</p>
            </button>
            <button className={LoginStyles.extBtns}>
              <AiFillApple style={{ color: "#999999" }} /> <p className={LoginStyles.extBtnText}> Sign in with Apple</p>
            </button>
          </div>
          <div className={LoginStyles.card}>
            <label htmlFor="email">Email address</label>
            <input className={LoginStyles.input} type="text" placeholder="Enter your Email" name="email" />
            <label htmlFor="password">Enter Password</label>
            <input className={LoginStyles.input} type="password" placeholder="Enter your Password" name="password" />
            <Link href={"#"} className={LoginStyles.link}>
              Forgot Password
            </Link>
            <input className={LoginStyles.submit} onClick={handleSubmit} type="submit" value={"Sign In"} />
          </div>
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
