import { ServicePageTextsType } from "@/lib/alltypes";
import { whatYouGet } from "@/lib/mapdata";
import { Minus } from "lucide-react";

const WhatYouGetCard = () => {
  return (
    <>
      {whatYouGet.map((i: ServicePageTextsType) => {
        return (
          <div
            className="flex gap-3"
            key={i.text}>
            <Minus color="#ff2056" /> {i.text}
          </div>
        );
      })}
    </>
  );
};

export default WhatYouGetCard;
