import { Variants } from "motion";

export const staggerContainer: Variants = {
  hidded: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
