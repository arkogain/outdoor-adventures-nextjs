import LinkBtn from "@/components/LinkBtn";
import { MoveRight } from "lucide-react";
import Image from "next/image";
const UpcomingSec = () => {
  return (
    <section className="mx-auto grid max-w-7xl place-items-center gap-3 px-6 py-14 text-center">
      <div className="font-primary text-4xl font-bold">Upcoming Events</div>

      <div className="bg-radical-red h-0.5 w-16"></div>

      <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-2 lg:gap-8">
        {/* 1st card */}

        <div className="grid place-items-center gap-3 text-center">
          {/* iamges  */}
          <Image
            src={"/home/everest-camp.jpg"}
            height={400}
            width={400}
            alt="card-img"
            className="h-[160] w-[250] rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)] sm:h-[250] sm:w-[420] lg:h-[320] lg:w-[500]"
          />

          {/* text heading  */}
          <div className="font-primary pt-4 text-xl text-[18px] font-bold">
            Everest Camp Trek
          </div>

          {/* text discription */}
          <div className="font-secondary text-[16px] text-black/80">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>

          {/* Button  */}
          <LinkBtn className="text-background flex gap-2">
            LEARN MORE <MoveRight />
          </LinkBtn>
        </div>

        {/* 2nd camp card */}

        <div className="grid place-items-center gap-3 text-center">
          {/* iamges  */}
          <Image
            src={"/home/walking-holidays.jpg"}
            height={400}
            width={400}
            priority={false}
            alt="card-img"
            className="h-[160] w-[250] rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)] sm:h-[250] sm:w-[420] lg:h-[320] lg:w-[500]"
          />

          {/* text heading  */}
          <div className="font-primary pt-4 text-[18px] font-bold">
            Walking Holidays
          </div>

          {/* text discription */}
          <div className="font-secondary text-[16px] text-black/80">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>

          {/* Button  */}
          <LinkBtn className="">
            LEARN MORE <MoveRight />
          </LinkBtn>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSec;
