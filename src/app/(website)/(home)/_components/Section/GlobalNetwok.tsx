"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalNetwok() {
    const mapRef = useRef(null);
    const [activeNode, setActiveNode] = useState<number | null>(null);
  
    const nodes = [
      { id: 1, x: 150, y: 100, region: "North America" },
      { id: 2, x: 350, y: 90, region: "Europe" },
      { id: 3, x: 450, y: 180, region: "Asia" },
      { id: 4, x: 250, y: 220, region: "Australia" },
      { id: 5, x: 180, y: 160, region: "South America" },
    ];
  
    useEffect(() => {
      const activateRandomNode = () => {
        const randomIndex = Math.floor(Math.random() * nodes.length);
        setActiveNode(randomIndex);
  
        setTimeout(() => {
          setActiveNode(null);
        }, 1000);
      };
  
      const interval = setInterval(activateRandomNode, 2000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">全球節點網絡</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            玩家輸入一個網址（如
            minecraft.server），系統會自動將他們連接至最近的伺服器節點，確保低延遲和最佳體驗
          </p>
        </div>

        <div
          className="relative h-96 bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700"
          ref={mapRef}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 300"
            className="absolute inset-0"
          >
            <path
              d="M100,100 Q150,70 200,100 T300,100 T400,120 T500,100"
              stroke="#2D3748"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M120,150 Q170,130 220,150 T320,150 T420,160 T520,150"
              stroke="#2D3748"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M150,200 Q200,180 250,200 T350,200 T450,210 T550,200"
              stroke="#2D3748"
              strokeWidth="1"
              fill="none"
            />

            {nodes.map((node, i) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={activeNode === i ? 15 : 8}
                  fill={
                    activeNode === i
                      ? "rgba(99, 102, 241, 0.8)"
                      : "rgba(99, 102, 241, 0.4)"
                  }
                  stroke="#6366F1"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x={node.x}
                  y={node.y - 15}
                  textAnchor="middle"
                  fill="#E2E8F0"
                  fontSize="12"
                >
                  {node.region}
                </text>
              </g>
            ))}

            <g>
              {nodes.map((node, i) => (
                <path
                  key={`line-${node.id}`}
                  d={`M300,150 L${node.x},${node.y}`}
                  stroke={activeNode === i ? "#6366F1" : "#2D3748"}
                  strokeWidth={activeNode === i ? "2" : "1"}
                  strokeDasharray={activeNode === i ? "none" : "4,4"}
                  className="transition-all duration-300"
                />
              ))}
            </g>

            <g>
              <rect
                x="250"
                y="140"
                width="100"
                height="20"
                rx="5"
                fill="#4F46E5"
              />
              <text
                x="300"
                y="155"
                textAnchor="middle"
                fill="white"
                fontSize="12"
              >
                minecraft.server
              </text>
            </g>
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm text-gray-400">活躍節點</p>
              <div className="flex items-center">
                5<span className="text-lg font-bold ml-1">/ 5</span>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm text-gray-400">平均延遲</p>
              <div className="flex items-center">
                35
                <span className="text-lg font-bold ml-1">ms</span>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm text-gray-400">在線玩家</p>
              <div className="flex items-center">
                1254
                <span className="text-lg font-bold ml-1">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
