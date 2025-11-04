import { AboutOne } from "@/components/about/AboutOne";
import { AboutThree } from "@/components/about/AboutThree";
import { AboutTwo } from "@/components/about/AboutTwo";
import { AnimalShopOne } from "@/components/animal/AnimalShopOne";
import { AnimalTwo } from "@/components/animal/AnimalTwo";
import { BannerOne } from "@/components/banner/BannerOne";
import { BannerTwo } from "@/components/banner/BannerTwo";
import { BlogOne } from "@/components/blogs/BlogOne";
import { BrandOne } from "@/components/brands/BrandOne";
import { ChooseOne } from "@/components/choose/ChooseOne";
import { CounterOne } from "@/components/counter/CounterOne";
import { CtaOne } from "@/components/cta/CtaOne";
import { DiscoverOne } from "@/components/discover/DiscoverOne";
import { InstagramOne } from "@/components/insta/InstagramOne";
import { MarqueeOne } from "@/components/marquee/MarqueeOne";
import { RegistrationOne } from "@/components/registration/RegistrationOne";
import { ServiceOne } from "@/components/service/ServiceOne";
import { TeamOne } from "@/components/teams/TeamOne";
import { TestimonialOne } from "@/components/testimonial/TestimonialOne";
import { TestimonialThree } from "@/components/testimonial/TestimonialThree";
import { WhyWeAreOne } from "@/components/why_we_are/WhyWeAreOne";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout header={1} footer={3}>
      {/* banner one */}
      <BannerTwo />

      {/* about one */}
      <AboutOne />

       {/* animal shop */}
       <AnimalTwo />

      <ChooseOne />

      <DiscoverOne />

      <CtaOne />

      {/* testimonial */}
      <TestimonialThree/>

      {/* blog */}
      <BlogOne />

      {/* insta */}
      <InstagramOne />
    </Layout>
  );
}
