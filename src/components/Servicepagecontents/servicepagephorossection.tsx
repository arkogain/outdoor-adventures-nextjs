import ServiceCard from "../Cards/ServiceCard";

const Servicepagephorossection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-7 py-12 lg:py-24">
        <div className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">{`It's Time to Start Your Adventures`}</div>
        <div className="h-0.5 w-24 bg-rose-500"></div>
        <div className="w-full text-center text-sm md:w-4/5 lg:w-3/5 lg:text-base">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe
          pulvinar.
        </div>
        <ServiceCard />
      </div>
    </>
  );
};

export default Servicepagephorossection;
