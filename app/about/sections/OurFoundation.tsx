"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Title from "@/components/Title";
import { ourFoundationCardItems } from "@/data/data";
import React from "react";

export default function OurFoundation() {
  return (
    <section className="py-22 lg:py-40">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container space-y-18"
      >
        {/* Title */}
        <Title
          subtitle="Our Foundation"
          title="The Principles Behind Our Success"
          classes="text-center max-w-xl mx-auto"
        />

        {/* Card wrapper */}
        <div className="grid gap-11 sm:grid-cols-2 xl:grid-cols-4">
          {ourFoundationCardItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="flex items-start gap-7  xl:flex-col xl:gap-5"
            >
              {/* Icon */}
              <span className="w-20 h-20 bg-secondaryClr flex items-center justify-center rounded-full shrink-0 mx-auto text-primaryClr">
                <item.icon size={40} />
              </span>
              {/* Content */}
              <div className="xl:text-center space-y-2">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
