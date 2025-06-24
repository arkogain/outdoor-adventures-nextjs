import Hero from "@/components/HomePage/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      {/* Hero secion  */}
      <Hero />
    </>
  );
};

export default page;
