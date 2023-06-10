"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { LoginStyles } from "@/Styles/Login.styles";

const GoogleLogin = () => {
    const { status } = useSession();

    const handleGoogleAuth = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };
    return (
        <button className={LoginStyles.extBtns} onClick={handleGoogleAuth}>
            {status === "loading" ? (
                <div className="w-full h-screen bg-white absolute top-0 left-0 z-10 grid place-items-center text-3xl font-extrabold">Please Wait...</div>
            ) : (
                <>
                    <FcGoogle /> <p className={LoginStyles.extBtnText}> Sign in with Google</p>
                </>
            )}
        </button>
    );
};

export default GoogleLogin;
