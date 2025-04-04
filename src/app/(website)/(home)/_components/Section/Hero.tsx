"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const BackgroundParticles = () => {
  const particles = [
    { width: 8, height: 8, left: 20, top: 30, duration: 7 },
    { width: 12, height: 10, left: 45, top: 50, duration: 8 },
    { width: 10, height: 12, left: 70, top: 20, duration: 6 },
    { width: 14, height: 14, left: 15, top: 70, duration: 9 },
    { width: 9, height: 11, left: 85, top: 40, duration: 7 },
    { width: 11, height: 9, left: 35, top: 80, duration: 8 },
    { width: 13, height: 13, left: 60, top: 60, duration: 6 },
    { width: 10, height: 10, left: 25, top: 45, duration: 7 },
    { width: 12, height: 8, left: 80, top: 25, duration: 8 },
    { width: 8, height: 12, left: 50, top: 75, duration: 9 },
    { width: 11, height: 11, left: 40, top: 35, duration: 7 },
    { width: 9, height: 13, left: 75, top: 55, duration: 8 },
    { width: 13, height: 10, left: 30, top: 65, duration: 6 },
    { width: 10, height: 14, left: 65, top: 15, duration: 7 },
    { width: 12, height: 12, left: 55, top: 85, duration: 8 },
    { width: 8, height: 10, left: 90, top: 45, duration: 9 },
    { width: 11, height: 8, left: 20, top: 90, duration: 7 },
    { width: 13, height: 11, left: 85, top: 30, duration: 8 },
    { width: 9, height: 9, left: 45, top: 70, duration: 6 },
    { width: 10, height: 13, left: 70, top: 40, duration: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500 opacity-30 rounded-full"
          style={{
            width: particle.width,
            height: particle.height,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -(particle.width * 10)],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-center">
      <BackgroundParticles />

      <div className="relative z-10 flex flex-col justify-center items-center">
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center mb-4"
        >
          <motion.h1
            initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
          >
            NexusPlay
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 font-medium mb-8 text-center"
        >
          一鍵部署，全球暢玩
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 mt-8"
        >
          <Link href={"/price"} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all transform hover:scale-105">
            立即部署
          </Link>
          <button className="px-8 py-3 bg-transparent border border-indigo-500 hover:bg-indigo-900/20 rounded-lg font-medium transition-all transform hover:scale-105">
            了解更多
          </button>
        </motion.div>
      </div>
      <div className="animate-bounce absolute bottom-10">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
