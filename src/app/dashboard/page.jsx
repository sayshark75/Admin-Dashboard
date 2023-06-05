"use client";

import "@/app/globals.css";
import { FiCalendar, FiPieChart, FiSettings, FiUsers } from "react-icons/fi";
import { BsBell, BsCashStack, BsTags } from "react-icons/bs";
import { BiLike, BiUserCircle } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement } from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { LineData } from "../../charts/lineChart.js";
import { PieData } from "@/charts/pieChart";
import Image from "next/image";

const Dashboard = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, LineElement, Title, Tooltip, Legend);

  return (
    <main className="bg-[#DDDDDD] w-full h-screen grid grid-cols-12 grid-rows-[repeat(12,1fr)]">
      <section className=" col-start-1 col-span-full row-start-[-1] row-span-full min-[820px]:col-span-3 min-[820px]:row-start-1 min-[820px]:row-span-full min-[820px]:p-8 p-2 relative">
        {/** Side Black Navbar */}
        <nav className="bg-black text-white rounded-2xl shadow-sm min-h-full h-full p-8 flex flex-col gap-4 max-[980px]:p-4 max-[820px]:flex-row max-[820px]:justify-center max-[820px]:items-center max-[820px]:sticky max-[820px]:bottom-0">
          <p className=" text-6xl font-extrabold flex-1 max-[1190px]:text-4xl max-[820px]:text-2xl">Board.</p>

          <section className=" flex-[5] flex gap-8 flex-col max-[820px]:flex-row max-[820px]:gap-2 text-xl max-[1080px]:text-base max-[720px]:text-3xl max-[720px]:justify-evenly">
            <div className="flex gap-2 justify-start items-center ">
              <FiPieChart /> <p className="font-medium max-[720px]:hidden ">Dashboard</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <BsTags /> <p className="text-gray-400 max-[720px]:hidden ">Transactions</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <FiCalendar /> <p className="text-gray-400 max-[720px]:hidden ">Schedules</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <BiUserCircle /> <p className="text-gray-400 max-[720px]:hidden ">Users</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <FiSettings /> <p className="text-gray-400 max-[720px]:hidden ">Settings</p>
            </div>
          </section>
          <section className="flex-1 text-gray-500 max-[450px]:hidden">
            <p>Help</p>
            <p>Contact Us</p>
          </section>
        </nav>
      </section>
      {/** Main Grid */}
      <section className=" col-start-1 col-span-full row-start-1 row-span-full min-[820px]:col-start-4 min-[820px]:row-start-1 grid grid-cols-12 grid-rows-[repeat(12,1fr)]">
        {/** Heading and Search Section */}
        <section className="px-5 row-start-1 col-start-1 col-span-full row-span-1 flex justify-center items-center">
          <div className="flex flex-1 items-center">
            <p className="text-3xl font-bold max-[440px]:text-xl">Dashboard</p>
          </div>
          <div className="flex flex-1 justify-end items-center gap-2">
            <div className="flex justify-center items-center p-1 px-4 rounded-xl bg-white text-[#AAAAAA]">
              <input type="text" placeholder="Search" className="placeholder:text-[#AAAAAA] max-[440px]:hidden " /> <MdOutlineSearch className="max-[440px]:text-2xl" />
            </div>
            <BsBell className="text-2xl" />
            <Image src="https://picsum.photos/100/100" width={"30"} height={"30"} alt="Account Pic" className="rounded-full max-w-[30px]" />
          </div>
        </section>
        {/** Total Stats Boxes  */}
        <section className=" row-start-2 col-start-1 col-span-full row-span-2 grid grid-cols-4 grid-flow-row p-2 gap-2 max-[640px]:row-span-4 max-[640px]:grid-cols-2">
          <div className="relative bg-[#DDEFE0] rounded-xl flex flex-1 justify-end items-start flex-col p-3">
            <BsCashStack className="absolute top-2 right-2 text-xl " /> <p className="text-xs">Total Revenues</p> <p className="text-xl font-bold">$2,34,566</p>
          </div>
          <div className="relative bg-[#F4ECDD] rounded-xl flex flex-1 justify-end items-start flex-col p-3">
            <BsTags className="absolute top-2 right-2 text-xl " /> <p className="text-xs">Total Transactions</p> <p className="text-xl font-bold">1,566</p>
          </div>
          <div className="relative bg-[#EFDADA] rounded-xl flex flex-1 justify-end items-start flex-col p-3">
            <BiLike className="absolute top-2 right-2 text-xl " /> <p className="text-xs">Total Likes</p> <p className="text-xl font-bold">9,324</p>
          </div>
          <div className="relative bg-[#DEE0EF] rounded-xl flex flex-1 justify-end items-start flex-col p-3">
            <FiUsers className="absolute top-2 right-2 text-xl " /> <p className="text-xs">Total Users</p> <p className="text-xl font-bold">846</p>
          </div>
        </section>
        {/** Chart Main */}
        <section className="bg-white rounded-xl p-1 m-2 row-start-4 col-start-1 col-span-full row-span-5 max-[640px]:row-start-6 max-[640px]:row-span-4 flex justify-center items-center">
          <Line options={LineData.options} data={LineData.data} />
        </section>
        {/** Last Section of Stats */}
        <section className="row-start-9 col-start-1 col-span-full row-span-4 max-[640px]:row-start-10 max-[640px]:row-span-3 flex max-[640px]:flex-col max-[640px]:p-2">
          {/** Pie Chart */}
          <div className="m-2 p-1 bg-white rounded-xl flex flex-1 justify-center items-center max-[640px]:hidden">
            <Pie data={PieData.data} />
          </div>
          {/** Tempeorary Schedule */}
          <div className="m-2 p-1 bg-white rounded-xl w-full flex flex-1 flex-col justify-center gap-2 items-start max-[640px]:p-0 max-[640px]:m-0">
            <p className="ml-3 text-sm ">Today&apos;s Schedule</p>
            <div className="border-l-4 text-gray-500 ml-5 text-xs border-green-600 p-2 ">
              <p>Meeting with xyz</p>
              <p>10:00AM</p>
              <p>Saturday</p>
            </div>
            <div className="border-l-4 text-gray-500 ml-5 text-xs border-blue-600 p-2 max-[640px]:hidden">
              <p>Meeting with xyz</p>
              <p>10:00AM</p>
              <p>Saturday</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
