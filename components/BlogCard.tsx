"use client";

import { motion } from "motion/react";
import * as variants from "@/motion/animation";

import Image from "next/image";
import Link from "next/link";
import React from "react";
interface cardProps {
  id: number;
  img: string;
  title: string;
  date: string;
}

export default function BlogCard({ id, img, title, date }: cardProps) {
  return (
    <motion.div
      variants={variants.fadeInUp}
      className="border border-primaryClr/25 p-3 rounded-xl"
    >
      {/* image */}
      <div>
        <Image
          src={img}
          alt={title}
          width={361}
          height={243}
          className="w-full h-auto rounded-lg"
        />
      </div>
      {/* Content */}
      <div>
        <Link
          href={`/blog/${id}`}
          className="mt-4 mb-7 inline-block card-title hover:text-primaryClr transition-colors leading-tight"
        >
          {title}
        </Link>
        <p>{date}</p>
      </div>
    </motion.div>
  );
}
