import Hero from "@/components/About/Hero";
import OurMission from "@/components/About/OurMission";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About || outdoor-adventures-nextjs",
};

const page = () => {
  return <>
  {/* Hero section  */}
  <Hero/>

  {/* Mission section  */}
  <OurMission/>


 
  </>;
};

export default page;
