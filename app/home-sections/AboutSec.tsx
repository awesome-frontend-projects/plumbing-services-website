"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import { aboutSecItems } from "@/data/data";
import { RiCheckboxCircleLine } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSec() {
  return (
    <section className="py-28 lg:py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-[52px] lg:grid-cols-2 lg:items-center"
      >
        {/* Content */}
        <div>
          <motion.p variants={variants.fadeInUp} className="subtitle">
            About Us
          </motion.p>
          <motion.h2 variants={variants.fadeInUp}>
            We are avalible for 24/7 Emergency Service
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="mt-4 mb-5">
            We are avalible for 24/7 Emergency Service When plumbing problems
            strike, you need a team you can trust. With over a decade of
            experience serving homeowners and businesses, we&apos;ve built our
            reputation on reliability, quality workmanship, and honest pricing.
            Our licensed professionals are equipped with the latest tools and
            techniques to handle any plumbing challenge, from simple repairs to
            complex installations.
          </motion.p>

          {/* List */}
          <div className="space-y-4">
            <motion.h3 variants={variants.fadeInUp}>
              Our commitments to you:
            </motion.h3>
            <motion.ul variants={variants.fadeIn} className="space-y-4">
              {aboutSecItems.map((item) => (
                <li key={item.id} className="flex items-center gap-[15px]">
                  {/* Icon */}
                  <span>
                    <RiCheckboxCircleLine />
                  </span>
                  {/* text */}
                  <p>{item.label}</p>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Btn */}
          <motion.div variants={variants.fadeInUp}>
            <Link href={"/about"} className="primary-btn mt-[49px]">
              learn more
            </Link>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div variants={variants.fadeIn} className="max-w-max mx-auto">
          <Image
            src={"/images/section-img-1.png"}
            alt="section image"
            width={582}
            height={572}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
