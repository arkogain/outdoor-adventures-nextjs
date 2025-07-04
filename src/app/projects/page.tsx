import Projecthero from "@/components/Hero/Projecthero";
import Sliders from "@/components/Projects-Slide/Sliders";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <Projecthero />
      {/* slide sections  */}
      <Sliders />
    </>
  );
};

export default page;
