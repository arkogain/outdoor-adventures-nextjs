import Serviceshero from "@/components/Hero/ServicesHero";
import Servicepagephorossection from "@/components/Servicepagecontents/servicepagephorossection";
import Whatyougettext from "@/components/Servicepagecontents/Whatyougettext";
import Whyoutdooradventuretext from "@/components/Servicepagecontents/Whyoutdooradventuretext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <Serviceshero />

      {/*  */}
      <div className="container mx-auto px-6">
        <Servicepagephorossection />
        <div className="grid grid-cols-1 gap-10 space-y-5 py-12 md:grid-cols-2 lg:py-24 xl:px-40">
          <Whyoutdooradventuretext />
          <Whatyougettext />
        </div>
      </div>
    </>
  );
};

export default page;
