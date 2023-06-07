"use client";
import { LoginStyles } from "@/Styles/Login.styles";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginModule = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/dashboard");
  };
  return (
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
  );
};

export default LoginModule;
