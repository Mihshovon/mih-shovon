"use client";
import { motion } from "motion/react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        {children}
      </motion.div>
    </>
  );
}
