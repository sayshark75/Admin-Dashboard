"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { LoginStyles } from "@/Styles/Login.styles";

const GoogleLogin = () => {
  const { data } = useSession();
  const handleGoogleAuth = () => {
    signIn({
      provider: "google",
      onSignIn: (user) => {
        router.push("/");
      },
    });
  };
  return (
    <button className={LoginStyles.extBtns} onClick={handleGoogleAuth}>
      {data && data.user ? (
        <pre>Welcome {data.user.name}</pre>
      ) : (
        <>
          <FcGoogle /> <p className={LoginStyles.extBtnText}> Sign in with Google</p>
        </>
      )}
    </button>
  );
};

export default GoogleLogin;
