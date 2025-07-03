import LinkBtn from "../LinkBtn";

const Hero = () => {
  return (
    <>
      <div className="font-primary bg-[url('/home/hero-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="text-background grid place-items-center gap-1 bg-black/65 py-28 lg:py-44">
          <div className="text-xl font-bold lg:text-2xl">
            Explore the Colourful World
          </div>
          {/* border section  */}
          <div className="bg-radical-red h-0.5 w-12"></div>
          <div className="mb-6 text-3xl font-bold lg:text-[64px]">
            A Wonderful Gift
          </div>
          <LinkBtn className="rounded-full">LEARN MORE</LinkBtn>
        </div>
      </div>
    </>
  );
};

export default Hero;
