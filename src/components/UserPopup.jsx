"use client";
import Image from "next/image";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { MdClose } from "react-icons/md";
import Loading from "./Loading";

const UserPopup = () => {
    const { data, status } = useSession();

    const [toggle, setToggle] = useState(false);
    const [duration, setDuration] = useState("");

    const handleShow = (e) => {
        if (e.target === e.currentTarget) {
            setToggle(!toggle);
            const date = new Date(data?.expires);

            const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };

            const formattedDateTime = date.toLocaleString("en-US", options).replace(",", "");
            setDuration(formattedDateTime);
        }
    };
    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };

    if (status === "loading") {
        return <Loading />;
    }

    return (
        <>
            <Image src={data?.user?.image} width={"30"} height={"30"} alt="Account Pic" className="rounded-full max-w-[30px]" onClick={handleShow} />
            {toggle ? (
                <div
                    className="w-full h-[100vh] backdrop-blur-md grid place-items-center bg-[#ffffff2d] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
                    onClick={handleShow}
                >
                    <div className="w-[320px] rounded-xl shadow-xl bg-white  flex flex-col justify-between items-center p-4 gap-4">
                        <div className="w-full flex justify-end">
                            <button onClick={() => setToggle(false)}>
                                <MdClose />
                            </button>
                        </div>
                        <Image className="rounded-full" width={120} height={120} src={data.user.image} alt="User Profile Image" />
                        <p className="text-lg font-medium">{data?.user?.name}</p>
                        <p className="text-lg">{data?.user?.email}</p>
                        <p className="text-sm">{"Session Expires on : " + duration}</p>
                        <button className="w-full p-3 bg-black text-white hover:bg-slate-800" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default UserPopup;
