"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Globe, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            極致遊戲體驗的關鍵特色
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            NexusPlay
            提供一站式去中心化遊戲託管解決方案，讓您輕鬆打造全球玩家都能流暢體驗的遊戲伺服器
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all"
          >
            <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">一鍵部署</h3>
            <p className="text-gray-400">
              只需一次購買，一個網址，即可獲得去中心化託管服務，無需重複配置或額外費用。
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all"
          >
            <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">全球節點</h3>
            <p className="text-gray-400">
              玩家將自動連接至最近的伺服器節點，大幅降低延遲，提供流暢的遊戲體驗。
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all"
          >
            <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">智能負載均衡</h3>
            <p className="text-gray-400">
              系統自動分配流量和資源，即使在高峰時段也能維持穩定的遊戲體驗，無需擔心伺服器崩潰。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
