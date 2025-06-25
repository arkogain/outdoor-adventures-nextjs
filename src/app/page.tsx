import Hero from "@/components/HomePage/Hero";
import Quote from "@/components/HomePage/Quote";
import UpcomingSec from "@/components/HomePage/UpcomingsecUi/UpcomingSec";
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
    </>
  );
};

export default page;
