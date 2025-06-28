import { ServicePageTextsType } from "@/lib/alltypes";
import { whyOutdoorAdventure } from "@/lib/mapdata";
import { Minus } from "lucide-react";

const WhyOutdoorAdventureCard = () => {
  return (
    <>
      {whyOutdoorAdventure.map((i: ServicePageTextsType) => {
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

export default WhyOutdoorAdventureCard;
