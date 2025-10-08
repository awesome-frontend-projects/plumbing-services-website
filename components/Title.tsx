"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
interface titleProps {
  subtitle: string;
  title: string;
  text?: string;
  classes: string;
}

export default function Title({ subtitle, title, text, classes }: titleProps) {
  return (
    <div className={`${classes}`}>
      <div className="space-y-2">
        <motion.p variants={variants.fadeInUp} className="subtitle">
          {subtitle}
        </motion.p>
        <motion.h2 variants={variants.fadeInUp}>{title}</motion.h2>
      </div>
      <motion.p variants={variants.fadeInUp}>{text}</motion.p>
    </div>
  );
}
