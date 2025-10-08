"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import InputField from "@/components/InputField";
import { ctaListItems } from "@/data/data";
import React from "react";

export default function ContactUsPage() {
  return (
    <section className="pt-32 lg:pt-40 pb-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container space-y-10 lg:space-y-20"
      >
        {/* Title */}
        <div className="text-center max-w-xl mx-auto">
          <motion.h2 variants={variants.fadeInUp}>Contact us</motion.h2>
          <motion.p variants={variants.fadeInUp}>
            Ready to solve your plumbing problems? We&apos;re here to help with
            fast, reliable service you can trust.Contact us today for
            professional plumbing solutions and upfront pricing.
          </motion.p>
        </div>
        {/* Wrapper */}
        <div className="grid lg:grid-cols-[0.9fr_1fr]">
          {/* Content */}
          <div className="bg-primaryClr p-8 rounded-xl text-white space-y-2.5">
            <motion.p variants={variants.fadeInUp} className="subtitle">
              Contact us
            </motion.p>
            <motion.h2 variants={variants.fadeInUp}>
              Need More information? Get in Touch
            </motion.h2>
            <motion.p variants={variants.fadeInUp}>
              Have question about our plumbing services or need expert advice
              for your project? we&apos;re here to help with professional
              guidance and reliable solutions.
            </motion.p>

            {/* List */}
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 mt-8">
              {ctaListItems.map((item) => (
                <motion.li
                  variants={variants.fadeInUp}
                  key={item.id}
                  className="flex items-center gap-3.5"
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
          </div>
          {/* Form wrapper */}
          <motion.div
            variants={variants.fadeIn}
            className="p-7 lg:p-[50px] my-auto"
          >
            {/* Title */}
            <h2>send Message</h2>
            <p>
              Ready to get started? Fill out the form below with details about
              your plumbing needs, and we&apos;ll get back to you promptly with
              personalized solutions.
            </p>

            {/* Form */}
            <form action="#" className="grid space-y-4">
              <InputField />
              <textarea
                placeholder="Write Message"
                className="h-44 border border-primaryClr/50 rounded-lg outline-none indent-5 py-4 resize-none placeholder-gray-800 focus:border-secondaryClr-1"
              />
              <button className="primary-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
