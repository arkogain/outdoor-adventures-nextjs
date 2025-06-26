import ServiceCard from "@/components/Cards/ServiceCard";
import Serviceshero from "@/components/Hero/ServicesHero";
import { ServiceCardType } from "@/lib/alltypes";
import { Minus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { any } from "zod/v4-mini";

export const metadata: Metadata = {
  title: "Services || outdoor-adventures-nextjs",
};

const page = () => {
  const cardItems = [
    {
      id: "01",
      image: "backpacking",
      headding: "Backpacking Trips",
      paragraph: `Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
`,
    },
    {
      id: "02",
      image: "family-hiking",
      headding: "Backpacking Trips",
      paragraph: `Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
`,
    },
    {
      id: "03",
      image: "services-bg",
      headding: "Backpacking Trips",
      paragraph: `Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
`,
    },
    {
      id: "04",
      image: "water-sports",
      headding: "Backpacking Trips",
      paragraph: `Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.
`,
    },
  ];

  return (
    <>
      <Serviceshero />

      {/*  */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-7 py-12 lg:py-24">
          <div className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">{`It's Time to Start Your Adventures`}</div>
          <div className="h-0.5 w-24 bg-rose-500"></div>
          <div className="w-full text-center text-sm md:w-4/5 lg:w-3/5 lg:text-base">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe
            pulvinar.
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-10 text-center md:grid-cols-2">
          {cardItems.map((item) => {
            return (
              <ServiceCard
                key={item.id}
                headding={item.headding}
                image={`/services/${item.image}.jpg`}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-10 space-y-5 py-12 md:grid-cols-2 lg:py-24 xl:px-40">
          <div className="space-y-5">
            <div className="text-xl font-bold sm:text-nowrap md:text-2xl lg:text-4xl">
              Why Outdoor Adventure
            </div>
            <div className="h-0.5 w-24 bg-rose-500"></div>
            <div className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            {/*  */}
            <div className="space-y-2">
              <div className="flex gap-3">
                <Minus color="#ff2056" /> Experience: Locavit liberioris
                possedit
              </div>
              <div className="flex gap-3">
                <Minus color="#ff2056" />
                Reputation: Diremit mundi mare undae
              </div>
              <div className="flex gap-3">
                <Minus color="#ff2056" /> Guide Experience: Spectent tonitrua
                mutastis
              </div>
            </div>
          </div>
          {/*  */}
          <div className="space-y-5">
            <div className="text-xl font-bold md:text-2xl lg:text-4xl">
              What You Get
            </div>
            <div className="h-0.5 w-24 bg-rose-500"></div>
            <div className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            {/*  */}
            <div className="space-y-2">
              <div className="flex gap-3">
                <Minus color="#ff2056" /> Private Hike: Locavit liberioris
                possedit
              </div>
              <div className="flex gap-3">
                <Minus color="#ff2056" /> Transportation: Diremit mundi mare
                undae
              </div>
              <div className="flex gap-3">
                <Minus color="#ff2056" /> Great Facilities: Spectent tonitrua
                mutastis
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
