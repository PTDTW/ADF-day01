"use client";
import { usePathname } from "next/navigation";
import { House, Users, CalendarCheck, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { Discord, Line, Telegram } from "react-bootstrap-icons";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 mb-2 bg-transparent opacity-100 backdrop-blur-[10px] z-[999]">
      <div className="w-auto h-[55px] text-[17px] flex items-center content-between justify-between max-w-[70%] mx-auto z-[100]">
        <Link
          href={"/"}
          className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center text-[20px] font-medium"
        >
          NexusPlay
        </Link>
        <div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
          <Link
            href={"https://discord.gg/bAuKcwCqwX"} target="_blank"
            className="text-gray-400 hover:text-gray-200 text-[14px] duration-200"
          >
            Discord支援
          </Link>
          <Link
            href={"/price"}
            className="text-white text-[15px] bg-[#4632f5] px-5.5 py-1.5 rounded-lg hover:bg-[#39469a] duration-200"
          >
            定價
          </Link>
        </div>
      </div>
    </div>
  );
}
