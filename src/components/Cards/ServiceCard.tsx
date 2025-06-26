import { ServiceCardType } from "@/lib/alltypes";
import Image from "next/image";

const ServiceCard = (data: ServiceCardType) => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
        <Image
          src={data.image}
          alt="bagpacking image"
          height={720}
          width={720}
          className="h-full w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
        />
        <div className="text-lg font-bold lg:text-xl">{data.headding}</div>
        <div className="">{data.paragraph}</div>
      </div>
    </>
  );
};

export default ServiceCard;
