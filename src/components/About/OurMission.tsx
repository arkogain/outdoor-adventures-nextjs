import Image from "next/image";

const OurMission = () => {
    return (
        <>
          <div className=" py-24 px-6 mx-auto max-w-7xl grid grid-cols-1 place-items-center text-start gap-6 lg:grid-cols-2 lg:space-x-10">
            <div className="space-y-4">
            <div className="font-bold text-4xl">Our Mission</div>
            <div className="border-b-3 border-red-500 px-6 md:px-8 w-[24]"></div>
            <div className="text-[16px] ">Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</div>
            <div className="text-[16px] ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
            <Image src={"/about/our-mission.jpg"} alt="" height={800} width={800} className="h-auto w-auto rounded-md shadow-[12px_12px_0px_.5px_rgba(184,184,184,0.4)] lg:w-[500]"/>
            </div> 


        {/* values  */}
         <div className="py-24 px-6 mx-auto max-w-7xl grid grid-cols-1 place-items-center text-start gap-6 lg:grid-cols-2 lg:space-x-10">
            {/* experience */}
            <div className="space-y-4">
                <div className="font-bold text-xl">Extraordinary Experiences</div>
                <div className="border-b-3 border-red-500 px-6 md:px-8 w-[24]"></div>
                <div className="text-[16px] ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-[16px] ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
            {/* experience */}



            {/* core value  */}
            <div className="space-y-4 text-lg">
            <div className="font-bold text-xl">Our Core Values</div>
            <div className="border-b-3 border-red-500 px-6 md:px-8 w-[24]"></div>
            <div className="text-[16px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            <div className="text-[16px] ">
                <div className="flex items-center gap-4">
                    <div className="border-b-3 border-red-500   w-[12]"></div>
                    <div className="">Locavit liberioris possedit</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="border-b-3 border-red-500   w-[12]"></div>
                    <div className="">Diremit mundi mare undae</div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="border-b-3 border-red-500   w-[12]"></div>
                    <div className="">Spectent tonitrua mutastis</div>
                </div>
                
            </div>
            </div>
            {/* core value  */}
            
            
            
            
            
            
            
            </div>
        </>
    );
}

export default OurMission;