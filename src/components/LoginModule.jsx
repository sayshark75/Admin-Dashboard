"use client";
import { LoginStyles } from "@/Styles/Login.styles";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import Loading from "./Loading";
import { useState } from "react";

const LoginModule = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { data, status } = useSession();
    console.log("data: ", data);
    console.log("status: ", status);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn("credentials", { callbackUrl: "/dashboard", ...formData });
        } catch (error) {
            console.log("error: ", error);
        }
    };
    return status === "loading" ? (
        <Loading />
    ) : (
        <form className={LoginStyles.card} onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input className={LoginStyles.input} type="text" placeholder="Enter your Email" name="email" value={formData.email} autoComplete="email" onChange={handleChange} />
            <label htmlFor="password">Enter Password</label>
            <input
                className={LoginStyles.input}
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                autoComplete="password"
                onChange={handleChange}
            />
            <Link href={"#"} className={LoginStyles.link}>
                Forgot Password
            </Link>
            <input className={LoginStyles.submit} type="submit" value={"Sign In"} />
        </form>
    );
};

export default LoginModule;
