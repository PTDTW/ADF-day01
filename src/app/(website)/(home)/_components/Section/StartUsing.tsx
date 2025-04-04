"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Globe, CheckCircle } from "lucide-react";
import { Box, List } from "react-bootstrap-icons";

export default function StartUsing() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          立即開始您的全球遊戲之旅
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-8"
        >
          一次購買，全球暢玩，為您的玩家提供最佳體驗
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
            立即部署 $499/年
          </button>
          <button className="px-8 py-4 bg-transparent border border-indigo-500 hover:bg-indigo-900/20 rounded-lg font-medium text-lg transition-all transform hover:scale-105">
            聯繫客服
          </button>
        </motion.div>
      </div>
    </section>
  );
}
