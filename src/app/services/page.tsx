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
          <div className="py-32 text-center text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            Services
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">
        <div className="">{`It's Time to Start Your Adventures`}</div>
        <div className="">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe
          pulvinar.
        </div>
        {/* 1st */}
        <div className="">
          <Image
            src={"/services/backpacking.jpg"}
            alt="bagpacking image"
            height={500}
            width={500}
          />
          <div className="">Backpacking Trips</div>
          <div className="">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>
        </div>
        {/* 2nd */}
        <div className="">
          <Image
            src={"/services/family-hiking.jpg"}
            alt="bagpacking image"
            height={500}
            width={500}
          />
          <div className="">Family Hiking Trips</div>
          <div className="">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>
        </div>
        {/* 3rd */}
        <div className="">
          <Image
            src={"/services/water-sports.jpg"}
            alt="bagpacking image"
            height={500}
            width={500}
          />
          <div className="">Water Sports</div>
          <div className="">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>
        </div>
        {/* 4th */}
        <div className="">
          <Image
            src={"/services/winter-sports.jpg"}
            alt="bagpacking image"
            height={500}
            width={500}
          />
          <div className="">Winter Sports</div>
          <div className="">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
