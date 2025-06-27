import WhatYouGetCard from "../Cards/WhatYouGetCard";

const Whatyougettext = () => {
  return (
    <>
      <div className="space-y-5">
        <div className="text-xl font-bold md:text-2xl lg:text-4xl">
          What You Get
        </div>
        <div className="h-0.5 w-24 bg-radical-red"></div>
        <div className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <WhatYouGetCard />
      </div>
    </>
  );
};

export default Whatyougettext;
