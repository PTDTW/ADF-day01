"use client";
import { Boxes } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Boxes className="w-8 h-8 text-indigo-600 mr-3" />
            <span className="text-xl font-bold">NexusPlay</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              關於我們
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              價格
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              幫助中心
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
