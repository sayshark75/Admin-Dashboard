"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { LoginStyles } from "@/Styles/Login.styles";
import Loading from "./Loading";

const GoogleLogin = () => {
    const { status } = useSession();

    const handleGoogleAuth = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };
    return (
        <button className={LoginStyles.extBtns} onClick={handleGoogleAuth}>
            {status === "loading" ? (
                <Loading />
            ) : (
                <>
                    <FcGoogle /> <p className={LoginStyles.extBtnText}> Sign in with Google</p>
                </>
            )}
        </button>
    );
};

export default GoogleLogin;
