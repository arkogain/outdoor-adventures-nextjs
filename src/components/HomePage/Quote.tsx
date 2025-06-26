import Image from "next/image";

const Quote = () => {
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-12 text-center lg:flex-row lg:justify-between">
        <Image
          src={"/home/quote-1.png"}
          height={100}
          width={100}
          alt="Quote-Image"
          className="h-auto w-auto lg:absolute"
        />
        <div className="relative left-1/2 -translate-x-1/2 space-y-4">
          <div className="text-2xl">
            "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris."
          </div>
          <div className="text-xl">- Adam Sendler</div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
