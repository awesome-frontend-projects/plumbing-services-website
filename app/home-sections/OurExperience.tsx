"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import Title from "@/components/Title";
import { ourExperienceSecItems } from "@/data/data";
import Image from "next/image";

export default function OurExperience() {
  return (
    <section className="bg-primaryClr py-22 lg:py-40">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-[61px] lg:grid-cols-2 lg:items-center"
      >
        {/* content */}
        <div>
          <Title
            subtitle="Our Experience"
            title="Building Trust Through Quality Service"
            text="With over 15 years in the plumbing industry, we've earned the trust of thousands of satisfied customers across the region.Our commitment to excellence and customer satisfaction has made us the go-to choice for reliable plumbing services."
            classes="text-white space-y-4"
          />

          {/* Status */}
          <div className="mt-9 text-white flex flex-wrap items-center gap-4 sm:gap-7 lg:gap-10">
            {ourExperienceSecItems.map((item) => (
              // Stat
              <motion.div variants={variants.fadeInUp} key={item.id}>
                <h3 className="text-3xl sm:text-4xl">
                  {item.value}
                  {item.id === 2 ? "k" : ""}+
                </h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Image */}
        <motion.div variants={variants.fadeIn} className="max-w-max mx-auto">
          <Image
            src={"/images/section-img-02.png"}
            alt="section image"
            width={356}
            height={503}
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
