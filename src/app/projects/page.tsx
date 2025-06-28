import Projecthero from "@/components/Hero/Projecthero";
import ImageSlider from "@/components/Peginations/Slidesperview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <Projecthero />
      <ImageSlider />
    </>
  );
};

export default page;
