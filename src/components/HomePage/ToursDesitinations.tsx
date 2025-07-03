import Image from "next/image";
import LinkBtn from "../LinkBtn";

const ToursDesitinations = () => {
  return (
    <>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-2">
        {/* colomns 1  */}
        <div className="space-y-6 lg:w-lg">
          <div className="font-primary text-2xl font-[800] lg:text-4xl">
            Upcoming Tours & Destination
          </div>
          <div className="bg-radical-red h-0.5 w-12"></div>
          <div className="font-black/65 font-secondary mb-10 text-[16px]">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris. Sinistra possedit litora ut nabataeaque. Setucant
            coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque
            constaque cepit sublime flexi nullus.
          </div>
          <LinkBtn className="w-[180]">LEARN MORE</LinkBtn>
        </div>

        {/* coloms 2  */}
        <div className="grid grid-cols-1 place-items-center gap-5 lg:col-span-1 lg:grid-cols-2">
          <div className="space-y-4">
            <Image
              src={"/home/upcoming-1.jpg"}
              height={400}
              width={400}
              alt="Image-01"
              className="h-auto w-full rounded-[4]"
            />

            <Image
              src={"/home/upcoming-3.jpg"}
              height={400}
              width={400}
              alt="Image-02"
              className="h-[300] w-full rounded-[4]"
            />
          </div>
          <div className="space-y-4">
            <Image
              src={"/home/upcoming-2.jpg"}
              height={400}
              width={400}
              alt="Image-03"
              className="h-[300] w-full rounded-[4]"
            />

            <Image
              src={"/home/upcoming-4.jpg"}
              height={400}
              width={400}
              alt="Image-04"
              className="h-[180] w-full rounded-[4]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursDesitinations;
