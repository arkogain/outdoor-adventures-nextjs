import ContactForm from "@/components/Forms/ContactForm";
import { FacebookIcon, TwitterIcon, Youtube } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <div className="bg-[url('/contact/contact-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/30">
          <div className="py-40 text-center text-3xl font-bold text-white sm:text-4xl lg:py-64 lg:text-6xl">
            Contact Us
          </div>
        </div>
      </div>
      <div className="">
        <ContactForm />
        {/*  */}
        <div className="">
          <div className="">Contact Info</div>
          <div className="">
            <div className="">Address​</div>
            <div className="">123 Fifth Avenue, NY 10160, New York, USA</div>
          </div>
          <div className="">
            <div className="">Email Us</div>
            <div className="">contact@example.com</div>
          </div>
          <div className="">
            <div className="">Call Us</div>
            <div className="">800-123-456</div>
          </div>
          <div className="">
            <div className="">Follow Us</div>
            <div className="flex">
              <Link
                href={""}
                className="rounded-full bg-rose-500 p-2 hover:bg-black ">
                <FacebookIcon
                  fill="white"
                  stroke="none"
                />
              </Link>
              <Link
                href={""}
                className="rounded-full bg-rose-500 p-2 hover:bg-black ">
                <TwitterIcon
                  fill="white"
                  stroke="none"
                />
              </Link>
              <Link
                href={""}
                className="rounded-full bg-rose-500 p-2 hover:bg-black ">
                <Youtube
                  fill="white"
                  stroke="none"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
