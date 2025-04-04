"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Globe, CheckCircle } from "lucide-react";
import { Box, List } from "react-bootstrap-icons";

export default function Concept() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">運作概念</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            我們的去中心化託管系統如何使用單一網址為全球玩家提供最佳連線體驗
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold">
                    1
                  </div>
                  <div className="mx-auto w-0.5 h-full bg-indigo-600/30 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">單一網址設定</h3>
                  <p className="text-gray-400">
                    您只需設定一個網址（例如
                    minecraft.server）並完成一次性購買，即可啟用全球節點網絡。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold">
                    2
                  </div>
                  <div className="mx-auto w-0.5 h-full bg-indigo-600/30 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">智能地理定位</h3>
                  <p className="text-gray-400">
                    當玩家連接到您的伺服器時，我們的系統會自動檢測他們的地理位置。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">自動節點連接</h3>
                  <p className="text-gray-400">
                    系統將玩家自動路由到最近的伺服器節點，確保最低延遲和最佳遊戲體驗。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full absolute inset-0 blur-3xl"></div>
            <div className="relative bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 h-full flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-green-400">
                      $ ping minecraft.server
                    </div>
                    <div className="text-gray-400 mt-2">
                      PING minecraft.server (203.0.113.1) 56(84) bytes of data.
                    </div>
                    <div className="text-white mt-1">
                      64 bytes from node-tokyo-1: icmp_seq=1 ttl=56 time=35.7 ms
                    </div>
                    <div className="text-white">
                      64 bytes from node-tokyo-1: icmp_seq=2 ttl=56 time=34.2 ms
                    </div>
                    <div className="text-white">
                      64 bytes from node-tokyo-1: icmp_seq=3 ttl=56 time=36.8 ms
                    </div>
                    <div className="text-gray-400 mt-2">
                      <span className="text-indigo-400">
                        連接到最近的節點: Tokyo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center font-mono text-sm">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span>成功連線</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>你的地理位置:</span>
                    <span className="text-indigo-400">Taipai, Taiwan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>伺服器節點:</span>
                    <span className="text-indigo-400">Tokyo DC-3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>連線延遲:</span>
                    <span className="text-green-400">35ms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
