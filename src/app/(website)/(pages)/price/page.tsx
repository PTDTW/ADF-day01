"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("yearly"); // "monthly" or "yearly"
  
  // Popular plan highlight settings
  const popularPlan = "pro";
  
  const plans = [
    {
      name: "入門版",
      id: "starter",
      description: "適合個人小型伺服器",
      monthlyPrice: 199,
      yearlyPrice: 2000,
      features: [
        "1個全球節點",
        "最多10位同時在線玩家",
        "5GB 伺服器空間",
        "基礎DDoS防護",
        "電子郵件支援"
      ],
      cta: "開始使用"
    },
    {
      name: "標準版",
      id: "standard",
      description: "適合小型團隊和社區",
      monthlyPrice: 499,
      yearlyPrice: 5200,
      features: [
        "5個全球節點",
        "最多30位同時在線玩家",
        "15GB 伺服器空間",
        "進階DDoS防護",
        "12小時內郵件回覆",
        "自訂域名"
      ],
      cta: "選擇標準版"
    },
    {
      name: "專業版",
      id: "pro",
      description: "適合大型社區和職業玩家",
      monthlyPrice: 1999,
      yearlyPrice: 19999, // Discounted from 2388
      originalYearlyPrice: 22788,
      features: [
        "8個全球節點",
        "最多100位同時在線玩家",
        "50GB 伺服器空間",
        "企業級DDoS防護",
        "優先技術支援",
        "自訂域名",
        "專屬備份系統",
        "流量分析儀表板"
      ],
      cta: "選擇專業版",
      popular: true
    },
    {
      name: "企業版",
      id: "enterprise",
      description: "適合電競團隊和大型賽事",
      monthlyPrice: 4999,
      yearlyPrice: 47988,
      features: [
        "18個全球節點",
        "無限同時在線玩家",
        "200GB 伺服器空間",
        "最高級DDoS防護",
        "24/7專人支援",
        "自訂域名",
        "自動備份系統",
        "進階流量分析",
        "技術經理支援",
        "專用資源配置"
      ],
      cta: "聯繫銷售團隊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            選擇最適合您的方案
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            所有方案均包含去中心化託管，全球節點分佈，一次設定永久使用
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center mt-8"
          >
            <span className={`mr-3 ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>
              月付
            </span>
            <button
              className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition duration-300 focus:outline-none"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            >
              <div
                className={`absolute w-6 h-6 bg-indigo-600 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-8" : ""
                }`}
              />
            </button>
            <span className={`ml-3 flex items-center ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
              年付
              <span className="ml-2 bg-indigo-600 text-xs px-2 py-1 rounded-full">
                省20%
              </span>
            </span>
          </motion.div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular 
                  ? "bg-gradient-to-b from-indigo-600 to-indigo-900 border-2 border-indigo-400 transform scale-105 z-10 shadow-xl shadow-indigo-500/20" 
                  : "bg-gray-800/70 border border-gray-700"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-bl-lg text-sm shadow-lg">
                    熱門方案
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingCycle === "monthly" ? "月" : "年"}
                    </span>
                  </div>
                  
                  {/* Show original price for discounted plan */}
                  {plan.originalYearlyPrice && billingCycle === "yearly" && (
                    <div className="mt-2 flex items-center">
                      <span className="text-gray-400 line-through">${plan.originalYearlyPrice}</span>
                      <span className="ml-2 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full">
                        省${plan.originalYearlyPrice - plan.yearlyPrice}
                      </span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className={`h-5 w-5 ${plan.popular ? "text-yellow-300" : "text-indigo-400"} mr-2 mt-0.5`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    plan.popular 
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black" 
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              {/* Popular plan animation */}
              {plan.popular && (
                <>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">常見問題</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">什麼是去中心化託管？</h3>
              <p className="text-gray-300">
                去中心化託管是指我們在全球範圍內部署多個服務器節點，當玩家連接時，系統會自動將他們路由到最近的節點，以確保最低延遲和最佳體驗。
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">如何更改我的訂閱方案？</h3>
              <p className="text-gray-300">
                您可以隨時在控制面板中升級或降級您的訂閱方案。升級將立即生效，而降級將在當前結算週期結束後生效。
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">如果我遇到技術問題怎麼辦？</h3>
              <p className="text-gray-300">
                根據您的訂閱方案，我們提供不同級別的技術支持。您可以通過電子郵件、在線聊天或專人支持獲取幫助。我們的目標是確保您的服務器始終正常運行。
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4">還有疑問？</h2>
          <p className="text-gray-300 mb-6">我們的團隊隨時為您提供幫助</p>
          <button className="px-8 py-3 bg-transparent border border-indigo-500 hover:bg-indigo-900/20 rounded-lg font-medium transition-all transform hover:scale-105">
            聯繫我們
          </button>
        </div>
      </div>
    </div>
  );
}