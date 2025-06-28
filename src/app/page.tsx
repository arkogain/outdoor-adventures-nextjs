import ExploreSection from "@/components/HomePage/ExploreSection";
import Hero from "@/components/Hero/Hero";
import Quote from "@/components/HomePage/Quote";
import UpcomingSec from "@/components/HomePage/UpcomingSec";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      {/* Hero secion  */}
      <Hero />

      {/* quotes section  */}
      <Quote />

      {/* Upcoming events  */}
      <UpcomingSec />

      {/* Explore section  */}
      <ExploreSection />
    </>
  );
};

export default page;
