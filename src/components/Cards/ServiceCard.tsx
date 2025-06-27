import { cardItems } from "@/lib/mapdata";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-10 text-center md:grid-cols-2">
        {cardItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex w-full flex-col items-center gap-6 md:w-4/5 lg:w-4/6">
              <Image
                src={`/services/${item.image}.jpg`}
                alt={item.alt}
                height={500}
                width={500}
                className="h-full w-full rounded shadow-[10px_10px_0px_.3px_rgba(0,0,0,0.15)]"
              />
              <div className="text-lg font-bold lg:text-xl">
                {item.headding}
              </div>
              <div className="">{item.paragraph}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceCard;
