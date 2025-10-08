import Testimonials from "@/components/Testimonials";
import AboutSec from "./home-sections/AboutSec";
import Hero from "./home-sections/Hero";
import OurBlog from "./home-sections/OurBlog";
import OurExperience from "./home-sections/OurExperience";
import ServicesSec from "./home-sections/ServicesSec";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSec />
      <ServicesSec />
      <OurExperience />
      <OurBlog />
      <Testimonials />
      <Cta />
    </>
  );
}
