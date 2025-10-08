"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import Title from "@/components/Title";
import Link from "next/link";
import { blogSecCardItems } from "@/data/data";
import BlogCard from "@/components/BlogCard";

export default function OurBlog() {
  return (
    <section className="py-22">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="flex items-center justify-between gap-10 flex-wrap">
          <Title
            subtitle="Our Blog"
            title="Latest plumbing tips and industry updates"
            classes="max-w-lg"
          />
          {/* Btn */}
          <motion.div variants={variants.fadeInUp}>
            <Link href={"/blog"} className="primary-btn">
              Browse all Articles
            </Link>
          </motion.div>
        </div>
        {/* Card wrapper */}
        <div className="mt-16 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {blogSecCardItems.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
