"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import React from "react";
import Title from "@/components/Title";
import { servicesSecCardItems } from "@/data/data";
import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSec() {
  return (
    <section className="bg-grayClr/30 py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          subtitle="Our Services"
          title="Explore our Services & solutions"
          text="We offer a complete range of professional plumbing services designed to keep your water systems running smoothly."
          classes="text-center max-w-xl mx-auto space-y-2.5"
        />
        {/* Card wrapper */}
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {servicesSecCardItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          {/* Cta card */}
          <motion.div
            variants={variants.fadeInUp}
            className="bg-secondaryClr rounded-2xl px-7 py-9 flex flex-col"
          >
            {/* icon */}
            <span>
              <Image
                src={"/images/icon-10.svg"}
                alt="icon"
                width={80}
                height={80}
              />
            </span>
            {/* text */}
            <p className="font-rubik my-4">
              Complete pipe repair and replacement services. Licensed
              professionals with proven results.
            </p>
            {/* Btn */}
            <Link href={"/services"} className="secondary-btn mt-auto">
              explore more
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
