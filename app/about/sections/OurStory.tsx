"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <section className="py-22 lg:py-40">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-18 lg:items-center"
      >
        {/* Content */}
        <div className="space-y-6">
          <Title
            subtitle="our story"
            title="From Humble Beginnings to Trusted Experts"
            text="Plufi was founded with a simple belief: every customer deserves honest, reliable plumbing service at a fair price. What began as a one-person operation has evolved into a full-service plumbing company, but our core values remain unchanged."
            classes="space-y-4 max-w-xl lg:max-w-none"
          />
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-xl lg:max-w-none"
          >
            We&apos;ve grown through word-of-mouth recommendations and repeat
            customers who trust us with their most important plumbing needs.
            Every job we complete, from the smallest repair to the largest
            installation, reflects our commitment to doing things the right way.
          </motion.p>
        </div>
        {/* Image */}
        <motion.div variants={variants.fadeIn} className="max-w-max mx-auto">
          <Image
            src={"/images/section-img-3.png"}
            alt="Section image"
            width={527}
            height={468}
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
