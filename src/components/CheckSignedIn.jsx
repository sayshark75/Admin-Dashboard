"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CheckSignedIn = () => {
  const { data } = useSession();
  const router = useRouter();
  if (data && data.user) {
    router.push("/dashboard");
  }
  return <></>;
};

export default CheckSignedIn;
