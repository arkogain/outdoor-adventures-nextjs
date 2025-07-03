import OurMission from "@/components/About/OurMission";
import Value from "@/components/About/Value";
import AboutHero from "@/components/Hero/AboutHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      {/* Hero section  */}
      <AboutHero />

      {/* Mission section  */}
      <OurMission />

      {/* value section  */}
      <Value />
    </>
  );
};

export default page;
