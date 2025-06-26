import { Button } from "@/components/ui/button";
import { eventsDetailstype } from "@/lib/alltypes";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type cardpros = {
  data: eventsDetailstype;
};
const Card = ({ data }: cardpros) => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-4 text-center">
        {/* iamges  */}
        <Image
          src={data.image}
          height={400}
          width={400}
          alt="card-img"
          className="h-auto w-auto rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)] lg:w-[450]"
        />

        {/* text heading  */}
        <div className="pt-4 text-xl font-bold">{data.title}</div>

        {/* text discription */}
        <div className="text-md w-auto text-black/80 lg:w-md">
          {data.discriptions}
        </div>

        {/* Button  */}
        <Link
          href={"#"}
          className="">
          <Button className="cursor-pointer rounded-full bg-red-500 px-10 py-6 text-lg text-white hover:bg-red-600">
            Learn More
            <div className="pt-0.5">
              <MoveRight />
            </div>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Card;
