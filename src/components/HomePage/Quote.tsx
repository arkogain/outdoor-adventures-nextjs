import Image from "next/image";

const Quote = () => {
  return (
    <section className="bg-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-12 lg:relative">
        <Image
          src={"/home/quote-1.png"}
          height={100}
          width={100}
          alt="Quote-Image"
          className="h-16 w-20 lg:absolute lg:left-6"
        />
        <div className="font-secondary space-y-4 text-center text-black/75">
          <div className="text-[20px]">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit
            liberioris.
          </div>
          <div className="text-[16px]">- Adam Sendler</div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
