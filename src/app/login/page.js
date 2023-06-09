import { LoginStyles } from "@/Styles/Login.styles";
import GoogleLogin from "@/components/GoogleLogin";
import LoginModule from "@/components/LoginModule";
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";

const Login = () => {
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
