import Hero from "@/components/About/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About || outdoor-adventures-nextjs",
};

const page = () => {
  return <>
  <Hero/>
  </>;
};

export default page;
