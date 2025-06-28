import { MoveRight } from "lucide-react";
import LinkBtn from "../LinkBtn";

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
              <LinkBtn className="text-background flex w-[185] gap-2">
                LEARN MORE <MoveRight />{" "}
              </LinkBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreSection;
