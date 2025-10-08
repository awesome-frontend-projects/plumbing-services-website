"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import { ctaListItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <section className="bg-secondaryClr pt-8">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid lg:grid-cols-[1fr_0.7fr] lg:items-end"
      >
        {/* Content */}
        <div className="my-14">
          <motion.h2 variants={variants.fadeInUp} className="max-w-lg">
            Have a Problem we’ll fix it today
          </motion.h2>

          {/* List */}
          <ul className="grid gap-5 md:grid-cols-2 mt-8">
            {ctaListItems.map((item) => (
              <motion.li
                variants={variants.fadeInUp}
                key={item.id}
                className="flex items-start gap-3.5"
              >
                <span className="shrink-0">
                  <item.icon size={40} />
                </span>
                <div className="space-y-1.5">
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.label}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Btn */}
          <motion.div variants={variants.fadeInUp}>
            <Link href={"/contact"} className="secondary-btn py-3.5 mt-4">
              Contact Us
            </Link>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div variants={variants.fadeIn} className="max-w-max mx-auto">
          <Image
            src={"/images/cta-img.png"}
            alt="cta Image"
            width={501}
            height={503}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
