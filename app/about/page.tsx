import React from "react";
import AboutUs from "./sections/AboutUs";
import OurStory from "./sections/OurStory";
import OurTeam from "./sections/OurTeam";
import OurFoundation from "./sections/OurFoundation";
import Testimonials from "@/components/Testimonials";

export default function About() {
  return (
    <>
      <AboutUs />
      <OurStory />
      <OurTeam />
      <OurFoundation />
      <Testimonials />
    </>
  );
}
