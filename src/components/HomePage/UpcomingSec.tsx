import LinkBtn from "@/components/LinkBtn";
import { MoveRight } from "lucide-react";
import Image from "next/image";
const UpcomingSec = () => {
  return (
    <section className="mx-auto grid max-w-7xl place-items-center gap-3 px-6">
      <div className="text-4xl font-bold">Upcoming Events</div>

      <div className="bg-radical-red h-0.5 w-16"></div>

      <div className="grid grid-cols-1 gap-[15rem] lg:grid-cols-2">
        {/* 1st card */}

        <div className="grid place-items-center text-center">
          {/* iamges  */}
          <Image
            src={"/home/everest-camp.jpg"}
            height={400}
            width={400}
            alt="card-img"
            className="h-auto w-auto rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)]"
          />

          {/* text heading  */}
          <div className="pt-4 text-xl font-bold">Everest Camp Trek</div>

          {/* text discription */}
          <div className="text-md text-black/80">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>

          {/* Button  */}
          <LinkBtn className="text-background flex gap-2">
            LEARN MORE <MoveRight />{" "}
          </LinkBtn>
        </div>

        {/* 2nd camp card */}

        <div className="grid place-items-center text-center">
          {/* iamges  */}
          <Image
            src={"/home/everest-camp.jpg"}
            height={400}
            width={400}
            alt="card-img"
            className="h-auto w-auto rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)]"
          />

          {/* text heading  */}
          <div className="pt-4 text-xl font-bold">Everest Camp Trek</div>

          {/* text discription */}
          <div className="text-md text-black/80">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris inistra possedit.
          </div>

          {/* Button  */}
          <LinkBtn className="text-background flex gap-2">
            LEARN MORE <MoveRight />{" "}
          </LinkBtn>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSec;
