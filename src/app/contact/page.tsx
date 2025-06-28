import Contactdetails from "@/components/Contactdetails";
import ContactForm from "@/components/Forms/ContactForm";
import Contacthero from "@/components/Hero/Contacthero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <Contacthero />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1  gap-10 space-y-10 py-14 lg:grid-cols-2">
          <ContactForm />
          <Contactdetails />
        </div>
      </div>
    </>
  );
};

export default page;
