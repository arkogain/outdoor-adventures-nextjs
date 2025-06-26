import Image from "next/image";

const OurMission = () => {
    return (
        <>
          <div className=" py-24 px-6 mx-auto max-w-7xl grid grid-cols-1 place-items-center text-start gap-6 lg:grid-cols-2 lg:space-x-10">
            <div className="space-y-4">
            <div className="font-bold text-5xl">Our Mission</div>
            <div className="border-b-3 border-red-500 px-6 md:px-8 w-[24]"></div>
            <div className="text-lg ">Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</div>
            <div className="text-lg ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
            <Image src={"/about/our-mission.jpg"} alt="" height={800} width={800} className="h-auto w-auto rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)] lg:w-[500]"/>
            </div> 
        </>
    );
}

export default OurMission;