import { Minus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <div className="bg-[url('/services/services-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/30">
          <div className="py-40 lg:py-64 text-center text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            Services
          </div>
        </div>
      </div>
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
          {/* 1st */}
          <div className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
            <Image
              src={"/services/backpacking.jpg"}
              alt="bagpacking image"
              height={500}
              width={500}
              className="w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
            />
            <div className="text-lg font-bold lg:text-xl">
              Backpacking Trips
            </div>
            <div className="">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </div>
          </div>
          {/* 2nd */}
          <div className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
            <Image
              src={"/services/family-hiking.jpg"}
              alt="bagpacking image"
              height={500}
              width={500}
              className="w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
            />
            <div className="text-lg font-bold lg:text-xl">
              Family Hiking Trips
            </div>
            <div className="">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </div>
          </div>
          {/* 3rd */}
          <div className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
            <Image
              src={"/services/water-sports.jpg"}
              alt="bagpacking image"
              height={500}
              width={500}
              className="w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
            />
            <div className="text-lg font-bold lg:text-xl">Water Sports</div>
            <div className="">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </div>
          </div>
          {/* 4th */}
          <div className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
            <Image
              src={"/services/winter-sports.jpg"}
              alt="bagpacking image"
              height={500}
              width={500}
              className="w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
            />
            <div className="text-lg font-bold lg:text-xl">Winter Sports</div>
            <div className="">
              Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
              liberioris inistra possedit.
            </div>
          </div>
        </div>
        {/* */}
        <div className="grid grid-cols-1 gap-10 space-y-5 py-12 md:grid-cols-2 lg:py-24">
          <div className="space-y-5">
            <div className="text-xl font-bold sm:text-nowrap md:text-2xl lg:text-4xl">
              Why Outdoor Adventure
            </div>
            <div className="h-0.5 w-24 bg-rose-500"></div>
            <div className="w-full text-sm md:w-4/5 lg:w-3/5 lg:text-base">
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
            <div className="w-full text-sm md:w-4/5 lg:w-3/5 lg:text-base">
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
