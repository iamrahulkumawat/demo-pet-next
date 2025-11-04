import { AboutFour } from "@/components/about/AboutFour";
import { CounterTwo } from "@/components/counter/CounterTwo";
import { CtaOne } from "@/components/cta/CtaOne";
import { DiscoverOne } from "@/components/discover/DiscoverOne";
import { TeamTwo } from "@/components/teams/TeamTwo";
import { TestimonialThree } from "@/components/testimonial/TestimonialThree";
import { WhyWeAreTwo } from "@/components/why_we_are/WhyWeAreTwo";
import { Layout } from "@/layouts/Layout";
import React from "react";

export default function About() {
  return (
    <Layout breadcrumbTitle="About Us" hideNewsLetter>
      {/* about */}
      <AboutFour />

      {/* why we are */}
      <DiscoverOne />

      {/* counter */}
     <CtaOne />

      {/* team */}
      <TestimonialThree/>
    </Layout>
  );
}
