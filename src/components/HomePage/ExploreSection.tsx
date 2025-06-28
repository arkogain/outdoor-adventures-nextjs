import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const ExploreSection = () => {
  return (
    <>
      <section className="bg-[url('/home/section-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="text-background bg-black/65 py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2">
            <div className="hidden lg:block"></div>

            <div className="space-y-6 text-start">
              <div className="text-4xl font-bold">Explore The World</div>

              {/* border section  */}
              <div className="bg-radical-red h-0.5 w-16"></div>

              <div className="text-lg">
                Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
                concordi. Fert his. Recessit mentes praecipites locum caligine
                sui egens erat. Silvas caeli regna.
              </div>

              {/* Button  */}
              {/* <Link
                href={"#"}
                className="">
                <Button className="cursor-pointer rounded-full bg-red-500 px-10 py-6 text-lg text-white hover:bg-red-600">
                  Learn More
                  <div className="pt-0.5">
                    <MoveRight />
                  </div>
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreSection;
