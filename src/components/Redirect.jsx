"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Redirect = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/login");
        return () => {};
    }, [router]);
    return <div></div>;
};

export default Redirect;
