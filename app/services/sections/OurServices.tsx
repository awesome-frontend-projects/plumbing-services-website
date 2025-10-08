"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Card from "@/components/Card";
import { servicesPageCardItems } from "@/data/data";
import React from "react";

export default function OurServices() {
  return (
    <section className="py-32 lg:py-40">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container space-y-10 lg:space-y-16"
      >
        {/* Title */}
        <div className="text-center max-w-xl mx-auto">
          <motion.h2 variants={variants.fadeInUp}>Our Services</motion.h2>
          <motion.p variants={variants.fadeInUp}>
            we provide a full range of expert plumbing services to meet all your
            residential and commercial needs
          </motion.p>
        </div>

        {/* Card wrapper */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesPageCardItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
