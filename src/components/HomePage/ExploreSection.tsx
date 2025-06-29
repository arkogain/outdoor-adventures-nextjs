import { MoveRight } from "lucide-react";
import LinkBtn from "../LinkBtn";

const ExploreSection = () => {
  return (
    <>
      <section className="bg-[url('/home/section-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="text-background bg-black/55 py-44">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-2">
            <div className="hidden lg:block"></div>

            <div className="space-y-6 text-start">
              <div className="font-primary text-4xl text-[34px] font-bold">
                Explore The World
              </div>

              {/* border section  */}
              <div className="bg-radical-red h-0.5 w-16"></div>

              <div className="font-secondary text-[16px]">
                Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
                concordi. Fert his. Recessit mentes praecipites locum caligine
                sui egens erat. Silvas caeli regna.
              </div>

              {/* Button  */}
              <LinkBtn className="w-[210]">
                LEARN MORE <MoveRight />
              </LinkBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreSection;
