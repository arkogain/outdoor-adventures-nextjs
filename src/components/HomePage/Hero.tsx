import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="bg-repeat-none h-dvh w-full bg-[url('/home/hero-bg.jpg')] bg-cover bg-fixed bg-center">
        <div className="flex h-dvh w-full flex-col items-center justify-center space-y-5 bg-black/65 text-center text-white">
          <div className="text-2xl font-semibold md:text-3xl">
            Explore the Colourful World
          </div>
          {/* border section  */}
          <div className="border-b-3 border-red-500 px-6 md:px-8"></div>
          <div className="text-4xl font-bold md:text-7xl">A Wonderful Gift</div>
          <Link href={"#"}>
            <Button className="cursor-pointer rounded-full bg-red-500 px-10 py-6 text-lg text-white hover:bg-red-600">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
