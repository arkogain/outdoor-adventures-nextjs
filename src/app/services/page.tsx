import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services || outdoor-adventures-nextjs",
};

const page = () => {
  return (
    <>
      <div className="bg-[url('/services/services-bg.jpg')] py-[50%]">
        <div className="">Services</div>
      </div>
    </>
  );
};

export default page;
