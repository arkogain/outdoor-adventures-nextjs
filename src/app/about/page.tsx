import Hero from "@/components/About/Hero";
import OurMission from "@/components/About/OurMission";
import Value from "@/components/About/Value";
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


  {/* value section  */}
  <Value/>
  </>;
};

export default page;
