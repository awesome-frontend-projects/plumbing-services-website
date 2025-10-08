"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* wrapper */}
      <div className="bg-primaryClr pt-28">
        <div className="container grid gap-[51px] lg:grid-cols-2 lg:items-center relative z-10">
          {/* Content */}
          <div className="text-white">
            <motion.p variants={variants.fadeInUp} className="subtitle mb-1.5">
              Read for help you
            </motion.p>
            <motion.h1
              variants={variants.fadeInUp}
              className="text-4xl sm:text-5xl xl:text-[56px]"
            >
              Expert Plumbing <span className="text-secondaryClr">service</span>{" "}
              provider
            </motion.h1>
            <motion.p
              variants={variants.fadeInUp}
              className="mt-4 mb-10 max-w-lg"
            >
              From emergency repairs to complete installations, we deliver fast,
              reliable plumbing solutions for your home and business.
            </motion.p>
            {/* Hero btn */}
            <motion.div variants={variants.fadeInUp}>
              <Link href={"/about"} className="primary-btn">
                learn more
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div variants={variants.fadeIn}>
            <Image
              src="/images/hero-img.png"
              alt="Hero image"
              width={647}
              height={600}
              priority
              className="relative z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Hero cards */}
      <div className="container space-y-5 relative z-10 flex flex-col sm:flex-row sm:items-center sm:-space-x-7 md:-mt-20">
        {/* Card 01 */}
        <motion.div
          variants={variants.fadeInUp}
          className="bg-white shadow-lg pl-[21px] pr-14 py-7 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 lg:max-w-[364px] w-full"
        >
          {/* Icon */}
          <div className="shrink-0">
            <Image
              src={"/images/icon-1.svg"}
              alt="hero icon one"
              width={64}
              height={64}
            />
          </div>
          {/* text */}
          <p className="font-semibold text-primaryClr font-rubik">
            Emergency plumbing repairs available 24/7. Fast response time
            guaranteed.
          </p>
        </motion.div>
        {/* Card 02 */}
        <motion.div
          variants={variants.fadeInUp}
          className="bg-secondaryClr px-[26px] py-5 rounded-xl flex flex-col shadow-sm lg:max-w-[230px] w-full"
        >
          {/* Icon */}
          <div>
            <Image
              src="/images/icon-2.svg"
              alt="hero icon two"
              width={70}
              height={71}
            />
          </div>

          {/* Text */}
          <p className="font-rubik text-primaryClr mt-1 mb-3.5">
            Licensed and insured plumbing professionals with over 10 years of
            experience.
          </p>

          {/* Btn */}
          <button className="secondary-btn max-w-max">hire us</button>
        </motion.div>
      </div>
    </motion.section>
  );
}
