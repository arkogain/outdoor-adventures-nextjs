import Hero from "@/components/HomePage/Hero";
import Quote from "@/components/HomePage/Quote";
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
    </>
  );
};

export default page;
