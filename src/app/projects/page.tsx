import Slider1 from "@/components/Projects-Slide/Slider1";
import Slider2 from "@/components/Projects-Slide/Slider2";
import Slider3 from "@/components/Projects-Slide/Slider3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl space-y-14 px-6 py-24 lg:space-y-10">
        {/* slider 1  */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="font-primary text-[15px] font-bold">Adventure</div>
            {/* border section  */}
            <div className="bg-radical-red h-0.5 w-12"></div>
          </div>

          <div className="font-primary text-4xl font-bold">Water Sports</div>
          <div className="font-secondary text-[16px] text-black/75">
            Interdum exercitation penatibus, praesentium facilisi accusamus
            fermentum, sagittis.
          </div>
          <Slider1 />
        </div>

        {/* slider 2  */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="font-primary text-[15px] font-bold">
              Snow Adventure
            </div>
            {/* border section  */}
            <div className="bg-radical-red h-0.5 w-12"></div>
          </div>

          <div className="font-primary text-4xl font-bold">Winter Sports</div>
          <div className="font-secondary text-[16px] text-black/75">
            Interdum exercitation penatibus, praesentium facilisi accusamus
            fermentum, sagittis.
          </div>
          <Slider2 />
        </div>

        {/* slider 3  */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="font-primary text-[15px] font-bold">
              Forest Tours
            </div>
            {/* border section  */}
            <div className="bg-radical-red h-0.5 w-12"></div>
          </div>

          <div className="font-primary text-4xl font-bold">Camping</div>
          <div className="font-secondary text-[16px] text-black/75">
            Interdum exercitation penatibus, praesentium facilisi accusamus
            fermentum, sagittis.
          </div>
          <Slider3 />
        </div>
      </div>
    </section>
  );
};

export default page;
