"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import Title from "./Title";
import { testimonialsCardItems } from "@/data/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-primaryClr py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-16 lg:grid-cols-[0.5fr_1fr] lg:items-start"
      >
        {/* Title */}
        <div>
          <Title
            subtitle="Testimonials"
            title="What our clients say about us"
            text="Don't just take our word for it hear from the customers who've experienced our exceptional plumbing services firsthand."
            classes="text-white space-y-4"
          />

          {/* Btn */}
          <motion.button
            variants={variants.fadeInUp}
            className="primary-btn mt-4"
          >
            learn more
          </motion.button>
        </div>
        {/* Card wrapper */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonialsCardItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="bg-white p-6 rounded-xl flex flex-col space-y-1.5"
            >
              <p className="font-medium">{item.text}</p>
              <div className="flex items-center gap-2.5 mt-auto">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={55}
                  height={55}
                  className="rounded-full shrink-0 aspect-square object-cover"
                />
                <p className="card-title">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
