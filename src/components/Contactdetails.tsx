import { FacebookIcon, TwitterIcon, Youtube } from "lucide-react";
import Link from "next/link";

const Contactdetails = () => {
  return (
    <>
      <section className="space-y-8">
        <div className="text-2xl font-bold lg:text-4xl">Contact Info</div>
        <div className="space-y-6">
          <div className="space-y-2.5">
            <div className="font-bold lg:text-lg">Address​</div>
            <div className="text-[16px]">
              123 Fifth Avenue, NY 10160, New York, USA
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="font-bold lg:text-lg">Email Us</div>
            <div className="text-[16px]">contact@example.com</div>
          </div>
          <div className="space-y-2.5">
            <div className="font-bold lg:text-lg">Call Us</div>
            <div className="text-[16px]">800-123-456</div>
          </div>
          <div className="space-y-2.5">
            <div className="font-bold lg:text-lg">Follow Us</div>
            <div className="flex gap-2.5">
              <Link
                href={""}
                className="bg-radical-red rounded-full p-2 hover:bg-black">
                <FacebookIcon
                  fill="white"
                  stroke="none"
                />
              </Link>
              <Link
                href={""}
                className="bg-radical-red rounded-full p-2 hover:bg-black">
                <TwitterIcon
                  fill="white"
                  stroke="none"
                />
              </Link>
              <Link
                href={""}
                className="bg-radical-red rounded-full p-2 hover:bg-black">
                <Youtube
                  fill="white"
                  stroke="none"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactdetails;
