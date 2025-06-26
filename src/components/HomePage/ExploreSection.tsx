import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ExploreSection = () => {
  return (
    <>
      <div className="bg-repeat-none h-[70dvh] bg-[url('/home/section-bg.jpg')] bg-cover bg-fixed bg-center">
        <div className="h-[70dvh] bg-black/65 text-white">
          <div className="mx-auto flex h-[70dvh] max-w-7xl items-center justify-between px-6">
            <div className="hidden w-full lg:block"></div>
            <div className="space-y-6 text-center lg:text-start">
              <div className="text-4xl font-bold">Explore The World</div>
              {/* border section  */}
              <div className="relative left-1/2 w-[24] -translate-x-1/2 border-b-3 border-red-500 px-6 md:px-8 lg:left-0 lg:translate-x-0"></div>
              <div className="text-lg">
                Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
                concordi. Fert his. Recessit mentes praecipites locum caligine
                sui egens erat. Silvas caeli regna.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
