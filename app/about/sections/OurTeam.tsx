"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Title from "@/components/Title";
import { socialIcons, teamCardItems } from "@/data/data";
import { RiAddLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

export default function OurTeam() {
  return (
    <section className="bg-grayClr/25 py-22">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          subtitle="Expert Plumbers"
          title="Meet our Team"
          text="Our skilled professionals bring years of experience and dedication to every job."
          classes="text-center max-w-md mx-auto"
        />

        {/* Card wrapper */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20">
          {teamCardItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="bg-grayClr-2 rounded-lg relative pt-10"
            >
              {/* Image */}
              <div className="max-w-max mx-auto">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={288}
                  height={347}
                />
              </div>
              {/* Author info */}
              <div className="bg-secondaryClr absolute bottom-5 left-0 right-0 max-w-5/6 mx-auto w-full rounded-xl p-4 space-y-2">
                {/* Icon */}
                <div className="relative bg-white w-12 h-12 flex items-center justify-center rounded-full mx-auto -mt-9 hover:bg-primaryClr transition-colors focus:bg-primaryClr focus:text-white group">
                  {/* Btn */}
                  <button className="group-hover:text-white">
                    <RiAddLine size={30} />
                  </button>
                  {/* Social links */}
                  <div className="absolute flex items-center justify-self-center shadow-sm bg-white -top-11 p-2 gap-2 rounded-full opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    {socialIcons.map((item) => (
                      <a
                        href="#"
                        key={item.id}
                        className="hover:text-secondaryClr-1 transition-colors"
                      >
                        <item.icon />
                      </a>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="text-center space-y-1.5">
                  <h3 className="card-title">{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
