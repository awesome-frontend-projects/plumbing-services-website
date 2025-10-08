"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import BlogCard from "@/components/BlogCard";
import { blogPageCardItems } from "@/data/data";
import React from "react";

export default function BlogPage() {
  return (
    <section className="pt-32 lg:pt-40 pb-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container space-y-10 lg:space-y-16"
      >
        {/* Title */}
        <div className="text-center max-w-xl mx-auto">
          <motion.h2 variants={variants.fadeInUp}>Blog</motion.h2>
          <motion.p variants={variants.fadeInUp}>
            Discover helpful plumbing tips, maintenance advice, and expert
            insights from the Plufi team.
          </motion.p>
        </div>
        {/* Card wrapper */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPageCardItems.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
