"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { Box, List } from "react-bootstrap-icons";
import { Database, Globe, CheckCircle, ChevronDown, Boxes } from "lucide-react";

// Components
import Hero from "@/app/(website)/(home)/_components/Section/Hero";
import Feature from "@/app/(website)/(home)/_components/Section/Feature";
import GlobalNetwok from "@/app/(website)/(home)/_components/Section/GlobalNetwok";
import Concept from "@/app/(website)/(home)/_components/Section/Concept";
import StartUsing from "@/app/(website)/(home)/_components/Section/StartUsing";

export default function Home() {
  return (
    <main className="PageContainer">
      <Hero></Hero>
      <Feature></Feature>
      <GlobalNetwok></GlobalNetwok>
      <Concept></Concept>
      
      
    </main>
  );
}
