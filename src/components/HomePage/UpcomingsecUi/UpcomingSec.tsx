import { eventsDetailstype } from "@/lib/alltypes";
import Card from "./Card";
const UpcomingSec = () => {
  const eventsDetails: eventsDetailstype[] = [
    {
      id: 1,
      image: "/home/everest-camp.jpg",
      title: "Everest Camp Trek",
      discriptions:
        "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
    },
    {
      id: 2,
      image: "/home/walking-holidays.jpg",
      title: "Walking Holidays",
      discriptions:
        "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="grid place-items-center gap-6 text-center">
        <div className="text-3xl font-bold">Upcoming Events</div>
        <div className="border-b-2 border-red-500 px-8" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 place-content-between gap-10 px-6 pt-12 md:grid-cols-2 lg:gap-20">
          {eventsDetails.map((eventsDetail) => {
            return (
              <Card
                key={eventsDetail.id}
                data={eventsDetail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSec;
